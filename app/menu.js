import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const Menu = (props) => {

  const isActive = (route) => {
    return route === props.location.pathname ? 'item--active' : '';
  }

  return (
    <div className="menu">
      <Link to="/profile"
        className={`item ${isActive('/profile')}`}><img src="../images/home.png" alt="home" /></Link>
      <Link to="/albums"
        className={`item ${isActive('/albums')}`}><img src="../images/album.png" alt="album" /></Link>
      <Link to="/my-top"
        className={`item ${isActive('/my-top')}`}><img src="../images/medal.png" alt="medal" /></Link>
      <Link to="/playlists"
        className={`item ${isActive('/playlists')}`}><img src="../images/playlist.png" alt="playlist" /></Link>
    </div>
  )
}

export default withRouter(Menu);
