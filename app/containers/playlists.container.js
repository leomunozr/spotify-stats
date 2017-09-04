import React from 'react';
import Playlists from '../views/playlists';
import { getMyPlaylists } from '../api/spotify-api';

class PlaylistsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { playlists: [] };
  }

  componentDidMount() {
    getMyPlaylists()
      .then(playlists => {
        this.setState({ playlists });
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
    return (
      <Playlists {...this.getProps()} />
    )
  }
}

export default PlaylistsContainer;
