import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const Menu = (props) => {

  const isActive = (route) => {
    return route === props.location.pathname ? 'item--active' : '';
  }

  return (
    <div className="menu">
      <Link to="/profile"
        title="Profile"
        className={`item ${isActive('/profile')}`}>
        <img src="../images/home.png" alt="home" />
      </Link>
      <Link to="/albums"
        title="Albums"
        className={`item ${isActive('/albums')}`}>
        <img src="../images/album.png" alt="album" />
      </Link>
      <Link to="/my-top"
        title="My top"
        className={`item ${isActive('/my-top')}`}>
        <img src="../images/medal.png" alt="medal" />
      </Link>
      <Link to="/playlists"
        title="Playlists"
        className={`item ${isActive('/playlists')}`}>
        <img src="../images/playlist.png" alt="playlist" />
      </Link>
      <div className="item item--bottom"
        title="Logout">
        <img src="../images/exit.png" alt="logout" />
      </div>
    </div>
  )
}

export default withRouter(Menu);
