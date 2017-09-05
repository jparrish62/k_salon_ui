import React, {Component} from 'react';
import $ from 'jquery';

class Images extends Component {

  componentDidMount(){
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
      event.preventDefault();
      debugger;
      $(this).ekkoLightbox();
    });
  }
  render(){
    return(
    <div>
      <div className="ms-hero-page-override ms-hero-img-city2 ms-hero-bg-primary color-primary"></div>
      <div className="text-center mb-6">
        <h1 className="no-m ms-site-title color-primary center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Gallery</h1>
        <p className="lead lead-lg color-primary text-center center-block mt-2 mb-4 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Discover our projects and the
          <span className="colorStar">rigorous process</span> of creation. Our principles are creativity, design, experience and knowledge.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port1.jpg" data-toggle="lightbox" data-title="MY caption">
                    <img src="assets/img/demo/port1.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 popup-gallery">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a  href="assets/img/demo/port2.jpg" data-lightbox="gallery" data-title="MY caption">
                    <img src="assets/img/demo/port2.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port3.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port3.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port4.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port4.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port5.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port5.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port6.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port6.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port7.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port7.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port8.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port8.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port9.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port9.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port10.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port10.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port11.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port11.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port12.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port12.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port13.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port13.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port14.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port14.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port15.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port15.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port16.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port16.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port17.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port17.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port18.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port18.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port19.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port19.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="card wow zoomIn">
              <div className="card-block p-05 ">
                <div className="withripple zoom-img">
                  <a href="assets/img/demo/port20.jpg" data-lightbox="gallery" data-title="My caption" >
                    <img src="assets/img/demo/port20.jpg" alt="" className="img-responsive"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Images;
