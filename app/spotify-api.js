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

export const getMyTopArtists = () => {
  const accessToken = getAccessToken();
  const params = {
    limit: 5,
    time_range: 'long_term'
  };

  return axios.get(`${baseUrl}/me/top/artists?${constructQuery(params)}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`
    }
  })
    .then(res => {
      return res.data.items.map(item => {
        return {
          id: item.id,
          name: item.name,
          artistImage: item.images[1]
        };
      });
    });
}

