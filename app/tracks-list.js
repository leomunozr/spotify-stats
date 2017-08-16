import React from 'react';

const renderTracks = (track, index) => (
  <tr key={track.id} className="tracks-list__table__item">
    <td>{track.name}</td>
    <td>{`${track.artists.join(' & ')}`}</td>
    <td>{track.album}</td>
  </tr>
)

const TracksList = (props) => {
  return (
    <div className="tracks-list">
      {props.hasError ?
        <h2 className="tracks-list__error">{props.hasError}</h2> : (
        <table className="tracks-list__table">
          <tr className="tracks-list__table__header">
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
          </tr>
          {props.tracks.map(renderTracks)}
        </table>
        )}
    </div>
  )
}

export default TracksList;
