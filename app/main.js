import React from 'react';
import Menu from './menu';
import Content from './content';

const Main = (props) => {

  return (
    <div className="main">
      {props.isAuthenticated && <Menu logout={props.logout} />}
      <Content {...props} />
    </div>
  );
}

export default Main;
