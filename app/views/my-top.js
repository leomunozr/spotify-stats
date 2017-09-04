import React from 'react';

const renderArtists = (artist) => (
  <div className="my-top__artists__item" key={artist.id}>
    <img src={artist.topImage.url} alt={artist.name} />
    <span className="my-top__artists__item__title">
      {artist.name}
    </span>
  </div>
)

const renderTracks = (track) => (
  <li className="my-top__tracks__item" key={track.id}>
    <div>{track.name}</div>
      <div>{track.artists.join(' & ')}</div>
  </li>
)

const MyTop = (props) => {
  return (
    <div className="my-top">
      <h1>My Top 5</h1>
      <h3>Tus artistas preferidos</h3>
      <div className="my-top__artists">
        {props.topArtists.map(renderArtists)}
      </div>

      <h3>Tus canciones más oídas</h3>
      <ol className="my-top__tracks">
        {props.topTracks.map(renderTracks)}
      </ol>
    </div>
  );
}

export default MyTop;
