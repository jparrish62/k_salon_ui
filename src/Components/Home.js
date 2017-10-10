import React, { Component } from 'react';
import {Link}               from 'react-router-dom'
import '../Styles/styles.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Navbar from './Navbar'
class Home extends Component {
  render() {

    return (
      <div className="App">
      <Navbar/>
      <div className="ms-hero-page-override ms-hero-img-team ms-hero-bg-primary">
        <div className="container">
        {localStorage.getItem('user_id') ? <div className="alert alert-primary text-center" role="alert">Your Are Currently Signed In</div> : " "}
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Salon Karma</h1>
            <p className="lead lead-lg color-medium text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Let the
              <span className="colorStar"> good that you do </span>
              <span className="colorStar">Bring out the beauty in you</span>.</p>
          </div><br/>
          <Link to={"/Stylist"}><div className="text-center"><button type="button" className="btn btn-raised btn-primary">Create An Appointment</button></div></Link>
        </div>
      </div>
      <div className="container">
        <ReactCSSTransitionGroup
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={1500}
          transitionLeaveTimeout={200}
          transitionName={'home'}
        >
        <div className="row">
          <div className="card-top">
            <div className="col-md-4">
              <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
                <div className="withripple zoom-img">
                  <a href="/" className="">
                    <img src="assets/img/demo/salon_1.jpg" alt="..." className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
                <div className="withripple zoom-img">
                  <a href="/" className="">
                    <img src="assets/img/demo/salon_2.jpg" alt="..." className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
                <div className="withripple zoom-img">
                  <a href="/" className="">
                  <img src="assets/img/demo/salon_3.jpg" alt="..." className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>

          <div className="row">
          <div className="col-md-4">
            <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
              <div className="withripple zoom-img">
                <a href="/" className="">
                  <img src="assets/img/demo/salon_4.jpg" alt="..." className="img-responsive"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
              <div className="withripple zoom-img">
                <a href="/" className="">
                  <img src="assets/img/demo/salon_5.jpg" alt="..." className="img-responsive"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
              <div className="withripple zoom-img">
                <a href="/" className="">
                  <img src="assets/img/demo/salon_6.jpg" alt="..." className="img-responsive"/>
                </a>
              </div>
            </div>
          </div>
          </div>


        <div className="row">
          <div className="col-md-4">
            <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
              <div className="withripple zoom-img">
                <a href="/" className="">
                  <img src="assets/img/demo/salon_7.jpg" alt="..." className="img-responsive"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
              <div className="withripple zoom-img">
                <a href="..." className="">
                  <img src="assets/img/demo/salon_8.jpg" alt="..." className="img-responsive"/>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card-primary mt-4 wow zoomInUp animation-delay-9">
              <div className="withripple zoom-img">
                <a href="/" className="">
                  <img src="assets/img/demo/salon_9.jpg" alt="..." className="img-responsive"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        </ReactCSSTransitionGroup>
      </div>
      </div>
    );
  }
}

export default Home;
