import React, { Component } from 'react';
import {Link}               from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-static-top yamm ms-navbar ms-navbar-dark navbar-mode">
        <div className="container container-full">
          <div className="navbar-header">
            <a className="navbar-brand" href="index.html">
              <span className="ms-logo ms-logo-sm">S</span>
              <span className="ms-title">Salon
                <strong>Karma</strong>
              </span>
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="dropdown active">
                <Link to={'/'} className="dropdown-toggle animated fadeIn animation-delay-4" data-toggle="dropdown" data-hover="dropdown" data-name="home">Home
                </Link>
              </li>
              <li className="dropdown">
                <Link to={'/Stylist'} className="dropdown-toggle animated fadeIn animation-delay-5" data-toggle="dropdown" data-hover="dropdown" data-name="page">Stylist
                </Link>
                <ul className="dropdown-menu dropdown-megamenu animated fadeIn animated-2x">
                  <li>
                    <div className="row">
                      <div className="col-sm-3 megamenu-col">
                        <div className="megamenu-block animated fadeInLeft animated-2x">
                          <h3 className="megamenu-block-title">
                            <i className="fa fa-bold"></i> Bootstrap CSS</h3>
                          <ul className="megamenu-block-list">
                            <li>
                              <a className="withripple" href="component-typography.html">
                                <i className="fa fa-font"></i> Typography</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown yamm-fw">
                <Link to={'/LogIn'} className="dropdown-toggle animated fadeIn animation-delay-6" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="component">Log In
                  <i className="zmdi zmdi-chevron-down"></i>
                </Link>
              </li>
              <li className="dropdown">
                <Link to={'/SignUp'} className="dropdown-toggle animated fadeIn animation-delay-7" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="blog">Sign Up
                </Link>
              </li>
              <li className="dropdown">
                <Link to={'/CreateStylist'} className="dropdown-toggle animated fadeIn animation-delay-8" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="portfolio">CreateStylist
                </Link>
              </li>
              <li className="dropdown">
                <Link to={'/Contact'} className="dropdown-toggle animated fadeIn animation-delay-9" data-toggle="dropdown" data-hover="dropdown" role="button" aria-haspopup="true" aria-expanded="false" data-name="ecommerce">Contact
                </Link>
              </li>
              <li className="btn-navbar-menu"><a href="/" className="sb-toggle-left"><i className="zmdi zmdi-menu"></i></a></li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
