import React from 'react';
import Loading from '../views/loading';
import Playlists from '../views/playlists';
import { getMyPlaylists } from '../api/spotify-api';

class PlaylistsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      playlists: []
    };
  }

  componentDidMount() {
    getMyPlaylists()
      .then(playlists => {
        this.setState({
          isLoading: false,
          playlists
        });
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
      playlists: this.state.playlists
    }
  }

  render() {
    return this.state.isLoading ?
      <Loading /> :
      <Playlists {...this.getProps()} />
  }
}

export default PlaylistsContainer;
