import React from 'react'
import { ThemeProvider } from 'styled-components'

import Head from '../Head'
import Menu from '../Menu'
import Footer from '../Footer'

import theme from '../../styles/theme'

const Layout = ({ children, post, page, index }) => (
  <div className="siteRoot">
    <Head post={post} page={page} index />
    <ThemeProvider theme={theme}>
      <>
        <div className="siteContent">
          <Menu />
          {children}
        </div>
        <Footer />
      </>
    </ThemeProvider>
  </div>
)

export default Layout
