import axios from 'axios';

const baseUrl = 'https://api.spotify.com/v1';

const getAccessToken = () => localStorage.getItem('accessToken');

const constructQuery = (params) => {
  return Object.entries(params)
    .reduce((query, [key, val]) => {
      return query + `${key}=${val}&`
    }, '')
    .slice(0, -1);
}

export const getMyProfile = () => {
  const accessToken = getAccessToken();

  return axios.get(`${baseUrl}/me`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
}

export const getMyAlbums = () => {
  const accessToken = getAccessToken();

  return axios.get(`${baseUrl}/me/albums`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
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
}

export const getMyTopWithParams = (type, params) => {
  const accessToken = getAccessToken();

  return axios.get(`${baseUrl}/me/top/${type}?${constructQuery(params)}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  });
}

export const getMyTopArtists = () => {
  const params = {
    limit: 5,
    time_range: 'long_term'
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
    time_range: 'long_term'
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

export const getMyPlaylists = () => {
  const accessToken = getAccessToken();

  return axios.get(`${baseUrl}/me/playlists`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(res => {
      const { items } = res.data;
      return items.map(item => {
        return {
          id: item.id,
          name: item.name
        }
      });
    });
}

export const getPlaylistTracks = (playlistId) => {
  const accessToken = getAccessToken();
  const userId = '1277256033';

  return axios.get(`${baseUrl}/users/${userId}/playlists/${playlistId}/tracks`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
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
}