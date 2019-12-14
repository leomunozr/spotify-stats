import React, { useEffect, useState } from 'react';
import Loading from '../views/loading';
import MyTop from '../views/my-top';
import { getMyTopArtists, getMyTopTracks } from '../api/spotify-api.js';

const MyTopContainer = (props) => {
  const [loading, setLoading] = useState(true);
  const [topArtists, setTopArtists] = useState([]);
  const [topTracks, setTopTracks] = useState([]);

  useEffect(() => {
    const myTopArtists = getMyTopArtists()
      .then(topArtists => {
        setTopArtists(topArtists);
      });

    const myTopTracks = getMyTopTracks()
      .then(topTracks => {
        setTopTracks(topTracks);
      });

    Promise.all([myTopArtists, myTopTracks])
      .then(() => {
        setLoading(false);
      })
      .catch(err => {
        console.error(err);

        if (err.response) {
          setLoading(false);

          switch (err.response.status) {
            case 401: props.logout();
          }
        }
      });
  }, []);

  return (
    loading
      ? <Loading />
      : <MyTop topArtists={ topArtists } topTracks={ topTracks } />
  );
};

export default MyTopContainer;
