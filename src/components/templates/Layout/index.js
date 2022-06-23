import React, { Fragment } from 'react';

import { Header, Footer, Content } from '@organisms';

import { GlobalStyles, LayoutContainer } from './styles';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <LayoutContainer>
        <GlobalStyles />
        <Header />
        <Content>{children}</Content>
        <Footer />
      </LayoutContainer>
    </Fragment>
  );
};

export default Layout;
