import React from 'react';

const renderTracks = (track) => (
  <tr key={ track.id } className="tracks-list__table__item">
    <td>{ track.name }</td>
    <td>{ `${track.artists.join(' & ')}` }</td>
    <td>{ track.album }</td>
  </tr>
);

const TracksList = ({ tracks, next, loadMore, hasError }) => {
  return (
    <div className="tracks-list">
      { hasError
        ? <h2 className="tracks-list__error">{ hasError }</h2>
        : (
          <table className="tracks-list__table">
            <thead>
              <tr className="tracks-list__table__header">
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
              </tr>
            </thead>
            <tbody>
              { tracks.map(renderTracks) }
            </tbody>
          </table>
        ) }
      { next && <button onClick={ loadMore }>+</button> }
    </div>
  );
};

export default TracksList;
