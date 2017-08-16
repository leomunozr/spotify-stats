import React from 'react';

const Profile = (props) => {

  const { me: {
    country,
    display_name: name,
    email,
    id,
    images: [{ url: profilePic }],
    external_urls: { spotify: yourUrl },
    followers: { total: followers },
    product
  } } = props;


  return (
    <div className="profile">
      <div className="profile__pic">
        <img src={profilePic} alt="me" />
      </div>
      <h2>{name}</h2>
      <span>{email}</span>
      <span><b>ID:</b> {id}</span>
      <span><b>Followers:</b> {followers}</span>
      <span><b>Type:</b> {product}</span>
      {country && <span className={`flag-icon flag-icon-${country.toLowerCase()}`}></span>}
    </div>
  );
}

export default Profile;
