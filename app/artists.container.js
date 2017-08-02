import React from 'react';
import axios from 'axios';
import Artists from './artists';
import { getMyTopArtists } from './spotify-api.js';

class ArtistsContainer extends React.Component{

  constructor(props) {
    super(props);

    this.state = { topArtists: [] };
  }

  componentDidMount() {
    getMyTopArtists()
      .then(topArtists => {
        this.setState({ topArtists });
      })
      .catch(err => {
        console.error(err);
        if (err.response.status === 401) {
          this.props.logout();
        }
      });
  }

  getProps(){
    return {
      topArtists: this.state.topArtists
    };
  }

  render() {
    return (
      <Artists {...this.getProps() } />
    );
  }
}

export default ArtistsContainer;
