import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AlbumsContainer from '../containers/albums.container';
import AuthenticatedRoute from '../authenticated-route';
import Login from './login';
import MyTopContainer from '../containers/my-top.container';
import PlaylistsContainer from '../containers/playlists.container';
import ProfileContainer from '../containers/profile.container';

const Content = (props) => {
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
