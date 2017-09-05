import React from 'react';
import axios from 'axios';
import Albums from '../views/albums';
import Loading from '../views/loading';
import { getMyAlbums, getMyTopArtists } from '../api/spotify-api';

class AlbumsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      isLoading: true
    };
  }

  componentDidMount() {
    getMyAlbums()
      .then(albums => {
        this.setState({
          albums,
          isLoading: false
        });
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

  getProps() {
    return {
      albums: this.state.albums
    };
  }

  render() {
    return this.state.isLoading ?
      <Loading /> :
      <Albums {...this.getProps() } />
  }
}

export default AlbumsContainer;
