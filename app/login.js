import React from 'react';
import spotifyConfig from '../spotify.config';

const {
  auth_uri,
  client_id,
  response_type,
  redirect_uri,
  state,
  scope,
  show_dialog
} = spotifyConfig;

const encodeScope = (scope) => scope.join('%20');

const uri = `${auth_uri}/` +
  `?client_id=${client_id}` +
  `&response_type=${response_type}` +
  `&redirect_uri=${encodeURIComponent(redirect_uri)}` +
  `&state=${state}` +
  `&scope=${encodeScope(scope)}` +
  `&show_dialog=${show_dialog}`;

const Login = (props) => {

  return (
    <div className="login">
      <h2>Please log in</p>
      <a href={uri}>Login</a>
    </div>
  )
}

export default Login;
