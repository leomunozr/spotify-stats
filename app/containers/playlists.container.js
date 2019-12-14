import React, { useEffect, useState } from 'react';
import Loading from '../views/loading';
import Playlists from '../views/playlists';
import { getMyPlaylists, getNextPlaylists } from '../api/spotify-api';

const PlaylistsContainer = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [playlists, setPlaylists] = useState([]);
  const [next, setNext] = useState(null);

  useEffect(() => {
    getMyPlaylists()
      .then(({ playlists, next }) => {
        setPlaylists(playlists);
        setNext(next);
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

  function loadMore() {
    getNextPlaylists(next)
      .then(res => {
        setPlaylists(playlists.concat(res.playlists));
        setNext(res.next)
      })
      .catch(err => {
        if (err.response) {
          setLoading(false);
          switch (err.response.status) {
            case 401: props.logout();
          }
        }
      });
  }

  return (
    isLoading
      ? <Loading />
      : <Playlists
        playlists={ playlists }
        next={ next }
        loadMore={ loadMore }
      />
  );
}

export default PlaylistsContainer;
