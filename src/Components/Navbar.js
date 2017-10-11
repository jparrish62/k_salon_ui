import React, { Component } from 'react';
import {Link}               from 'react-router-dom'
class Navbar extends Component {

  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-static-top yamm ms-navbar ms-navbar-dark navbar">
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
                <Link to={"/Stylist"} className="dropdown-toggle animated fadeIn animation-delay-4" data-toggle="dropdown" data-hover="dropdown" data-name="home">Home
                <i className="zmdi zmdi-chevron-down"></i></Link>
                <ul className="dropdown-menu">
                  <li>
                    <div className="ms-menu-double">
                      <ul className="ms-menu-double-main-menu">
                        <li>
                          <Link to={"/"} data-hover="tab">
                            <i className="zmdi zmdi-desktop-windows"></i>Home Page</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle animated fadeIn animation-delay-5" data-toggle="dropdown" data-hover="dropdown" data-name="page">Stylist
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-left animated-2x animated fadeIn">
                  <li className="dropdown-submenu">
                    <Link to={"/Stylist"} className="has_children">View Stylists</Link>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to={"/CreateStylist"}>Create Stylist</Link>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle animated fadeIn animation-delay-5" data-toggle="dropdown" data-hover="dropdown" data-name="page">Log In
                  <i className="zmdi zmdi-chevron-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-left animated-2x animated fadeIn">
                  <li className="dropdown-submenu">
                    <Link to={"/LogIn"} className="has_children">Log In</Link>
                  </li>
                  <li className="dropdown-submenu">
                    <Link to={"/SignUp"}>Sign Up</Link>
                  </li>
                </ul>
              </li>
              <li className="btn-navbar-menu"><a href="#" className="sb-toggle-left"><i className="zmdi zmdi-menu"></i></a></li>
            </ul>
          </div>
          <a href="#" className="sb-toggle-left btn-navbar-menu">
            <i className="zmdi zmdi-menu"></i>
          </a>
        </div>
      </nav>
      </div>
    );
  }
}

export default Navbar;
