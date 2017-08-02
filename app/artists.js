import React from 'react';

const renderArtists = (artist) => (
  <div className="artist" key={artist.id}>
    <img src={artist.artistImage.url} alt={artist.name} />
    <span className="artist__title">
      {artist.name}
    </span>
  </div>
)

const Artists = (props) => {
  return (
    <div className="artists">
      <h1>Artists</h1>
      <div className="artists__grid">
        {props.topArtists.map(renderArtists)}
      </div>
    </div>
  );
}

export default Artists;
