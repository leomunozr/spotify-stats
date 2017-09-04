import React from 'react';
import { getPlaylistTracks } from '../api/spotify-api';
import TracksList from '../views/tracks-list';

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
        if (err.response) {
          let message;
          switch (err.response.status) {
            case 404: this.setState({ hasError: "Ooops! An error occurred. :(" });
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
    return (
      <TracksList {...this.getProps() } />
    );
  }
}

export default TracksListContainer;
