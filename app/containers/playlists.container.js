import React, { useEffect, useState } from 'react';
import Loading from '../views/loading';
import Playlists from '../views/playlists';
import { getMyPlaylists } from '../api/spotify-api';

const PlaylistsContainer = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getMyPlaylists()
      .then(playlists => {
        setPlaylists(playlists);
        setLoading(false);
      })
      .catch(err => {
        if (err.response) {
          setLoading(false);
          switch (err.response.status) {
            case 401: props.logout();
          }
        }
      });
  }, []);

  return (
    isLoading
      ? <Loading />
      : <Playlists playlists={ playlists } />
  );
}

export default PlaylistsContainer;
