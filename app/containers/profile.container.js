import React from 'react';
import axios from 'axios';
import Profile from '../views/profile';
import { getMyProfile } from '../api/spotify-api';

class ProfileContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      me: {
        country: '',
        display_name: '',
        email: '',
        id: '',
        profilePic: '',
        external_urls: { spotify: '' },
        yourUrl: '',
        images: [{ url: '' }],
        followers: { total: '' },
        product: ''
      }
    };
  }

  componentDidMount() {
    getMyProfile(this.props.accessToken)
      .then(res => {
        this.setState({ me: res.data });
      })
      .catch(err => {
        console.error(err);
        if (err.response.status === 401) {
          this.props.logout();
        }
      });
  }

  getProps() {
    return {
      me: this.state.me
    };
  }

  render() {
    return (
      <Profile {...this.getProps() } />
    );
  }
}

export default ProfileContainer;
