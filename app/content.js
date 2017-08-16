import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AlbumsContainer from './albums.container';
import AuthenticatedRoute from './authenticated-route';
import Login from './login';
import MyTopContainer from './my-top.container';
import PlaylistsContainer from './playlists.container';
import ProfileContainer from './profile.container';

const Content = (props) => {

  const { isAuthenticated, logout } = props;

  return (
    <div className="content">

      <Switch>
        <AuthenticatedRoute path="/profile" component={ProfileContainer} {...props} />
        <AuthenticatedRoute path="/albums" component={AlbumsContainer} {...props} />
         <AuthenticatedRoute path="/my-top" component={MyTopContainer} {...props} />
         <AuthenticatedRoute path="/playlists" component={PlaylistsContainer} {...props} />
        <Route path="/login" component={Login} />
        <Redirect to="/profile" />
      </Switch>

    </div>
  );
}
export default Content;
