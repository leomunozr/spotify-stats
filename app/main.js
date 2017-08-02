import React from 'react';
import Menu from './menu';
import Content from './content';

const Main = (props) => {

  return (
    <div className="main">
      {props.isAuthenticated && <Menu />}
      <Content {...props} />
    </div>
  );
}

export default Main;
