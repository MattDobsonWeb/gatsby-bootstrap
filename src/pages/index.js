import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import HeroImage from '../img/hero.jpg';
import BlogRoll from '../components/BlogRoll';

export default () => {
  return (
    <Layout>
      {/* start hero */}
      <section
        style={{
          background: `url(${HeroImage})`,
          backgroundSize: `cover`,
          backgroundPosition: `center center`
        }}
        class="hero"
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <h1>Bootstrap 4 Blog - A free template by Bootstrap Temple</h1>
              <a href="#" class="hero-link">
                Discover More
              </a>
            </div>
          </div>
          <a href=".intro" class="continue link-scroll">
            <i class="fa fa-long-arrow-down"></i> Scroll Down
          </a>
        </div>
      </section>
      {/* end hero */}

      {/* start intro */}
      <section class="intro">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <h2 class="h3">Some great intro here</h2>
              <p class="text-big">
                Place a nice <strong>introduction</strong> here{' '}
                <strong>to catch reader's attention</strong>. Lorem ipsum dolor
                sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderi.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* end intro */}

      <BlogRoll />
    </Layout>
  );
};
