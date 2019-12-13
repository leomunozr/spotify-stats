import axios from 'axios';

const baseUrl = 'https://api.spotify.com/v1';
const userId = '1277256033';

const getAccessToken = () => localStorage.getItem('accessToken');

const constructQuery = (params) =>
  Object.entries(params)
    .reduce((query, [key, val]) => {
      return query + `${key}=${val}&`
    }, '')
    .slice(0, -1);

const callApi = (url) =>
  axios.get(`${baseUrl}${url}`, {
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`
    }
  });

export const getMyProfile = () =>
  callApi('/me');

export const getMyAlbums = () =>
  callApi('/me/albums')
    .then(res => {
      const { items } = res.data;
      return items.map(item => {
        return {
          id: item.album.id,
          name: item.album.name,
          albumImage: item.album.images[1]
        };
      });
    });

export const getMyTopWithParams = (type, params) =>
  callApi(`/me/top/${type}?${constructQuery(params)}`);

export const getMyTopArtists = () => {
  const params = {
    limit: 5,
    time_range: 'short_term'
  };

  return getMyTopWithParams('artists', params)
    .then(res => {
      return res.data.items.map(item => {
        return {
          id: item.id,
          name: item.name,
          topImage: item.images[1]
        };
      });
    });
}

export const getMyTopTracks = () => {
  const params = {
    limit: 5,
    time_range: 'short_term'
  };

  return getMyTopWithParams('tracks', params)
    .then(res => {
      return res.data.items.map(item => {
        return {
          id: item.id,
          name: item.name,
          artists: item.artists.map(artist => artist.name)
        };
      });
    });
}

export const getMyPlaylists = () =>
  callApi('/me/playlists')
    .then(res => {
      const { items, next } = res.data;

      return items.map(item => ({
        id: item.id,
        name: item.name
      }));
    });

export const getPlaylistTracks = (playlistId) =>
  callApi(`/users/${userId}/playlists/${playlistId}/tracks`)
    .then(res => {
      const { items } = res.data;
      return items.map(item => {
        return {
          id: item.track.id,
          name: item.track.name,
          album: item.track.album.name,
          artists: item.track.artists.map((artist) => artist.name),
          popularity: item.track.popularity
        };
      });
    });
