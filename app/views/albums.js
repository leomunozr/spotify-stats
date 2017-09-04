import React from 'react';

const renderAlbum = (album) => (
  <div className="album" key={album.id}>
    <img src={album.albumImage.url} alt={album.name} />
    <span className="album__title">
      {album.name}
    </span>
  </div>
);

export default function(props) {
  return (
    <div className="albums">
      <h1>Albums</h1>
      <div className="albums__grid">
        {props.albums.map(renderAlbum)}
      </div>
    </div>
  );
}
