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
      <header>
        <div className="pic">
          <img src={profilePic} alt="me" />
        </div>
        <h2>{name}</h2>
      </header>
      <section>
        <p><b>Your ID:</b> {id}</p>
        <p><b>Country:</b> {country}
          {country && <span className={`flag-icon flag-icon-${country.toLowerCase()}`}></span>}
        </p>
        <p><b>e-mail:</b> {email}</p>
        <p><b>Followers:</b> {followers}</p>
        <p><b>Type:</b> {product}</p>
      </section>
    </div>
  );
}

export default Profile;
