import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import TracksListContainer from './tracks-list.container';

const Playlists = (props) => {

  const isSelected = (route) => {
    return `/playlists/${route}` === props.location.pathname ? 'playlists__list__item--selected' : '';
  }

  return (
    <div className="playlists">
      <div className="playlists__list">
        <h1>My playlists</h1>
        {props.playlists.map((playlist) => (
          <Link to={`/playlists/${playlist.id}`}
            key={playlist.id}
            className={`playlists__list__item ${isSelected(playlist.id)}`}>
            {playlist.name}
          </Link>
        ))}
      </div>
      <div className="playlists__content">
        {props.playlists.map((playlist) => (
          <Route path={`/playlists/${playlist.id}`} render={() => <TracksListContainer playlistId={playlist.id} />}  key={playlist.id} />
        ))}
      </div>
    </div>
  )
}

export default withRouter(Playlists);
