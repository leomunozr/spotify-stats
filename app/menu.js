import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="menu">
      <Link className="item" to="/profile">Profile</Link>
      <Link className="item" to="/albums">Albums</Link>
      <Link className="item" to="/artists">Artists</Link>
    </div>
  )
}

export default Menu;
