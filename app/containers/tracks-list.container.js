import React, { useEffect, useState } from 'react';
import { getPlaylistTracks } from '../api/spotify-api';
import TracksList from '../views/tracks-list';
import Loading from '../views/loading';

const TracksListContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    getPlaylistTracks(props.playlistId)
      .then(tracks => {
        setTracks(tracks);
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

  return (
    loading
      ? <Loading />
      : <TracksList tracks={ tracks } hasError={ errorMessage } />
  );
};

export default TracksListContainer;
