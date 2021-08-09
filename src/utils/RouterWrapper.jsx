import React from 'react';
import { Route } from 'react-router-dom';

const RouterWrapper = (props) => {
  const {
    layout: Layout,
    children,
    ...rest
  } = props;

  const renderLayout = (p) => (
    <Layout {...p}>
      {children}
    </Layout>
  );

  return (<Route {...rest} render={renderLayout} />);
};

export default RouterWrapper;
