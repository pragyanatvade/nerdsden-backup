import React from 'react';
import { ThemeProvider } from 'styled-components';

import Head from '../Head';
import Menu from '../Menu';
import Footer from '../Footer';

import theme from '../../styles/theme';
import GlobalStyle from '../../styles/global';

const Layout = ({ children }) => (
  <div className="siteRoot">
    <Head />
    <ThemeProvider theme={theme}>
      <>
        <div className="siteContent">
          <Menu />
        </div>
        <Footer />
      </>
    </ThemeProvider>
    <GlobalStyle />
  </div>
);

export default Layout;
