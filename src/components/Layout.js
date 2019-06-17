import React from 'react';
import { useStaticQuery } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.default.css';
import '../styles/fontastic.css';

import 'bootstrap/dist/js/bootstrap.min';

import Header from './Header';

const Layout = ({ children }) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <>
      <Header siteTitle={site.siteMetadata.title} />

      {children}
    </>
  );
};

export default Layout;
