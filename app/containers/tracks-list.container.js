import React from 'react';
import { getPlaylistTracks } from '../api/spotify-api';
import TracksList from '../views/tracks-list';
import Loading from '../views/loading';

class TracksListContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      tracks: []
    };
  }

  componentDidMount() {
    getPlaylistTracks(this.props.playlistId)
      .then(tracks => {
        this.setState({
          isLoading: false,
          tracks
        });
      })
      .catch(err => {
        console.error(err);
        if (err.response) {
          let message;
          switch (err.response.status) {
            case 404: this.setState({ hasError: "Ooops! An error occurred. :(" });
            default: this.setState({ isLoading: false });
          }
        }

      });
  }

  getProps() {
    return {
      hasError: this.state.hasError,
      tracks: this.state.tracks
    };
  }

  render() {
    return this.state.isLoading ?
      <Loading /> :
      <TracksList {...this.getProps() } />
  }
}

export default TracksListContainer;
