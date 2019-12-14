import React, { useEffect, useState } from 'react';
import Loading from '../views/loading';
import Profile from '../views/profile';
import { getMyProfile } from '../api/spotify-api';

const initialMe = {
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
};

const ProfileContainer = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [me, setMe] = useState(initialMe);

  useEffect(() => {
    getMyProfile()
      .then(res => {
        setLoading(false);
        setMe(res.data)
      })
      .catch(err => {
        console.error(err);

        if (err.response) {
          setLoading(false);

          switch (err.response.status) {
            case 401: props.logout();
          }
        }
      });
  }, []);

  return (
    isLoading
      ? <Loading />
      : <Profile me={me} />
  );
}

export default ProfileContainer;
