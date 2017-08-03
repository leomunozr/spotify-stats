import React from 'react';
import { getPlaylistTracks } from './spotify-api';
import TracksList from './tracks-list';

class TracksListContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = { tracks: [] };
  }

  componentDidMount() {
    getPlaylistTracks(this.props.playlistId)
      .then(tracks => {
        this.setState({ tracks });
      })
      .catch(err => {
        console.error(err);
      });
  }

  getProps() {
    return {
      tracks: this.state.tracks
    };
  }

  render() {
    return (
      <TracksList {...this.getProps() } />
    );
  }
}

export default TracksListContainer;
