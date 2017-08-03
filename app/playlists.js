import React from 'react';
import { Route, Link } from 'react-router-dom';
import TracksListContainer from './tracks-list.container';

const Playlists = (props) => {
  return (
    <div className="playlists">
      <h1>My playlists</h1>
      {props.playlists.map((playlist) => (
        <div key={playlist.id}>
          <Link to={`/playlists/${playlist.id}`}>{playlist.name}</Link>
        </div>
      ))}
      <div>
        {props.playlists.map((playlist) => (
          <Route path={`/playlists/${playlist.id}`} render={() => <TracksListContainer playlistId={playlist.id} />}  key={playlist.id} />
        ))}
      </div>
    </div>
  )
}

export default Playlists;
