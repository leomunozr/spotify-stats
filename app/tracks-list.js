import React from 'react';

const renderTracks = (track) => (
  <li key={track.id}>{`${track.name} - ${track.artists.join(' & ')}`}</li>
)

const TracksList = (props) => {
  return (
    <ol className="tracks-list">
      {props.tracks.map(renderTracks)}
    </ol>
  )
}

export default TracksList;
