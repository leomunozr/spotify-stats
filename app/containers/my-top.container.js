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
    getMyTopArtists()
      .then(topArtists => {
        this.setState({
          isLoading: false,
          topArtists
        });
      })
      .catch(err => {
        console.error(err);
        if (err.response.status === 401) {
          this.props.logout();
        }
      });

    getMyTopTracks().
      then(topTracks => {
        this.setState({
          isLoading: false,
          topTracks
        });
      })
      .catch(err => {
        console.error(err);
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
