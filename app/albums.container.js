import React from 'react';
import axios from 'axios';
import Albums from './albums';
import { getMyAlbums, getMyTopArtists } from './spotify-api';

class AlbumsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { albums: [] };
  }

  componentDidMount() {
    getMyAlbums()
      .then(albums => {
        this.setState({ albums });
      })
      .catch(err => {
        console.error(err);
        if (err.response.status === 401) {
          this.props.logout();
        }
      });
  }

  getProps() {
    return {
      albums: this.state.albums
    };
  }

  render() {
    return (
      <Albums {...this.getProps() } />
    );
  }
}

export default AlbumsContainer;
