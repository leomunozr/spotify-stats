import React from 'react';
import axios from 'axios';
import Loading from '../views/loading';
import MyTop from '../views/my-top';
import { getMyTopArtists, getMyTopTracks } from '../api/spotify-api.js';

class MyTopContainer extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      topArtists: [],
      topTracks: []
    };
  }

  componentDidMount() {
    const myTopArtists = getMyTopArtists()
      .then(topArtists => {
        this.setState({
          isLoading: false,
          topArtists
        });
      });

    const myTopTracks = getMyTopTracks()
      .then(topTracks => {
        this.setState({
          isLoading: false,
          topTracks
        });
      });

    Promise.all([myTopArtists, myTopTracks])
      .then(() => {
        this.setState({ isLoading: false })
      })
      .catch(err => {
        console.error(err);

        if (err.response) {
          this.setState({ isLoading: false });

          switch (err.response.status) {
            case 401: this.props.logout();
          }
        }
      });
  }

  getProps(){
    return {
      topArtists: this.state.topArtists,
      topTracks: this.state.topTracks
    };
  }

  render() {
    return this.state.isLoading ?
      <Loading /> :
      <MyTop {...this.getProps() } />
  }
}

export default MyTopContainer;
