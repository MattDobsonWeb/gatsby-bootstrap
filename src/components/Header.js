import React from 'react';
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header className="header">
    <nav className="navbar navbar-expand-lg">
      <div className="search-area">
        <div className="search-area-inner d-flex align-items-center justify-content-center">
          <div className="close-btn">
            <i className="icon-close"></i>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <form action="#">
                <div className="form-group">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="What are you looking for?"
                  />
                  <button type="submit" className="submit">
                    <i className="icon-search-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="navbar-header d-flex align-items-center justify-content-between">
          <Link to="/" className="navbar-brand">
            {siteTitle}
          </Link>
          <button
            type="button"
            data-toggle="collapse"
            data-target="#navbarcollapse"
            aria-controls="navbarcollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div id="navbarcollapse" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar-text">
            <a href="#" className="search-btn">
              <i className="icon-search-1"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
