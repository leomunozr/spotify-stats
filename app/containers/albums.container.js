import React, { useEffect, useState } from 'react';
import Albums from '../views/albums';
import Loading from '../views/loading';
import { getMyAlbums } from '../api/spotify-api';

const AlbumsContainer = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getMyAlbums()
      .then(albums => {
        setAlbums(albums);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);

        if (err.response) {
          setLoading(false)

          switch (err.response.status) {
            case 401: props.logout();
          }
        }
      });
  }, []);

  return (
    isLoading
      ? <Loading />
      : <Albums albums={ albums } />
  );
}

export default AlbumsContainer;
