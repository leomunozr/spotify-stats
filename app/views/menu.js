import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import homeImg from '../../images/home.png';
import albumImg from '../../images/album.png';
import medalImg from '../../images/medal.png';
import playlistImg from '../../images/playlist.png';
import exitImg from '../../images/exit.png';

const Menu = (props) => {

  const isActive = (route) => {
    return route === props.location.pathname ? 'item--active' : '';
  }

  return (
    <div className="menu">
      <Link to="/profile"
        title="Profile"
        className={`item ${isActive('/profile')}`}>
        <img src={homeImg} alt="home" />
      </Link>
      <Link to="/albums"
        title="Albums"
        className={`item ${isActive('/albums')}`}>
        <img src={albumImg} alt="album" />
      </Link>
      <Link to="/my-top"
        title="My top"
        className={`item ${isActive('/my-top')}`}>
        <img src={medalImg} alt="medal" />
      </Link>
      <Link to="/playlists"
        title="Playlists"
        className={`item ${isActive('/playlists')}`}>
        <img src={playlistImg} alt="playlist" />
      </Link>
      <div className="item item--bottom"
        title="Logout"
        onClick={props.logout}>
        <img src={exitImg} alt="logout" />
      </div>
    </div>
  )
}

export default withRouter(Menu);
