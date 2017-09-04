import React from 'react';
import Main from '../views/main';

const readParams = (uri) => {
  const regex = /([^/&;=]+)=?([^&;]*)/g;
  let hashParams = {};
  let param;

  while ( param = regex.exec(uri)) {
      hashParams[param[1]] = decodeURIComponent(param[2]);
  }
  return hashParams;
}

class MainContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      authToken: null,
      isAuthenticated: false
    };

    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    const uri = window.location.hash.substring(1);
    const { access_token:accessToken , state, token_type, expires_in } = readParams(uri);
    // const savedState = localStorage.getItem('spotify_state');
    const savedState = "123";

    if (accessToken && (state === null || state !== savedState)) {
      // Hay token pero el estado no coincide con el último estado
      console.error('Error on authentication', accessToken, state, savedState);
    } else if (accessToken) {
      // Hay token y la guardamos
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('spotify_state', state);
    }

    const cachedToken = localStorage.getItem('accessToken');
    if (cachedToken) {
      this.setState({
        accessToken: cachedToken,
        isAuthenticated: true
      });
    }
  }

  logout() {
    console.log('loggin out...');
    this.setState({ isAuthenticated: false });
    localStorage.clear();
  }

  getProps() {
    return {
      accessToken: this.state.accessToken,
      isAuthenticated: this.state.isAuthenticated,
      logout: this.logout
    }
  }

  render() {
    return (<Main {...this.getProps() } />);
  }
}

export default MainContainer;
