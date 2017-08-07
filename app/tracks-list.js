import React from 'react';

const renderTracks = (track, index) => (
  <span key={track.id}>{`${index+1}. ${track.name} - ${track.artists.join(' & ')}`}</span>
)

const TracksList = (props) => {
  console.log(props)
  return (
    <div className="tracks-list">
      {props.hasError ?
        <span>{props.hasError}</span> :
      props.tracks.map(renderTracks)}
    </div>
  )
}

export default TracksList;
