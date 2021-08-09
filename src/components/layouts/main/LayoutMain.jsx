import React from 'react';

import './LayoutMain.scss';

const LayoutMain = (props) => {
  const { children } = props;

  return (
    <div className="layout-main">
      {children}
    </div>
  );
};

export default LayoutMain;
