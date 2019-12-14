import React, { useEffect, useState } from 'react';
import TracksList from '../views/tracks-list';
import Loading from '../views/loading';
import { getPlaylistTracks, getNextPlaylistTracks } from '../api/spotify-api';

const TracksListContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [next, setNext] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getPlaylistTracks(props.playlistId)
      .then(({tracks, next}) => {
        setTracks(tracks);
        setNext(next);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);

        if (err.response) {
          setLoading(false);

          switch (err.response.status) {
            case 404: setErrorMessage("Ooops! An error occurred. :(");
          }
        }
      });
  }, []);

  function loadMoreTracks() {
    getNextPlaylistTracks(next)
      .then(res => {
        setTracks(tracks.concat(res.tracks));
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
    loading
      ? <Loading />
      : <TracksList
        tracks={ tracks }
        next={ next }
        loadMore={ loadMoreTracks }
        hasError={ errorMessage }
      />
  );
};

export default TracksListContainer;
