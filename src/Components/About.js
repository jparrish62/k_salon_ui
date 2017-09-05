import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="App">
      <div className="ms-hero-page-override ms-hero-img-city ms-hero-bg-primary">
        <div className="container">
          <div className="text-center">
            <span className="ms-logo ms-logo-lg ms-logo-white center-block mb-2 mt-2 animated zoomInDown animation-delay-5">M</span>
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Material
              <span>Style</span>
            </h1>
            <p className="lead lead-lg color-white text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Discover our projects and the
              <span className="color-warning">rigorous process</span> of creation. Our principles are creativity, design, experience and knowledge.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card-hero animated slideInUp animation-delay-8 mb-6">
          <div className="card-block">
            <h2 className="color-primary">About Us</h2>
            <div className="row">
              <div className="col-md-6 text-justify">
                <p className="dropcaps">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsa id saepe, quos ullam fugiat velit pariatur alias cumque. Architecto et vitae perferendis cumque ratione officiis? Quas quod, rerum dolores qui. Iste magnam ipsam laborum.
                  Natus quis maiores est qui maxime, consectetur ipsam esse quaerat facilis quos repudiandae eaque magni laboriosam amet.</p>
                <p>Perferendis, blanditiis unde fugiat voluptas molestias velit asperiores rerum ipsam animi eum temporibus at numquam, nobis voluptates minus maxime cum obcaecati! Tenetur sit corporis laudantium inventore officia officiis odio repellat
                  dolore quos repudiandae voluptas ad facere, amet placeat animi voluptatem distinctio beatae.</p>
              </div>
              <div className="col-md-6 text-justify">
                <p>Non sequi adipisci nostrum natus rem accusamus itaque repellendus illum neque! Voluptate, error commodi a quaerat eveniet tenetur reiciendis nulla doloremque iusto repellat quis asperiores, quibusdam architecto culpa facere aliquam placeat
                  eaque amet, optio nobis alias maiores. Nulla perferendis impedit hic placeat veniam distinctio error.</p>
                <p>Tenetur numquam a, nesciunt neque odit amet, qui quibusdam natus assumenda quas omnis, aspernatur quisquam nobis illum ea distinctio tempora quaerat. Aperiam cumque, eveniet similique praesentium, temporibus, id quis labore aspernatur
                  quod placeat ducimus fuga consequuntur numquam autem. Voluptates repellat.</p>
              </div>
            </div>
            <hr className="dotted"/>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card card-info card-flat">
                  <div className="card-block text-center">
                    <i className="fa fa-rocket color-info font-big"></i>
                    <h4 className="color-info">Lorem ipsum dolor</h4>
                    <p>Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium.</p>
                    <a href="/" className="btn btn-info">
                      <i className="zmdi zmdi-download"></i> Button</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card card-warning card-flat">
                  <div className="card-block text-center">
                    <i className="zmdi zmdi-airplane color-warning font-big"></i>
                    <h4 className="color-warning">Lorem ipsum dolor</h4>
                    <p>Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium.</p>
                    <a href="/" className="btn btn-warning">
                      <i className="zmdi zmdi-download"></i> Button</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card card-danger card-flat">
                  <div className="card-block text-center">
                    <i className="zmdi zmdi-coffee color-danger font-big"></i>
                    <h4 className="color-danger">Lorem ipsum dolor</h4>
                    <p>Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium.</p>
                    <a href="/" className="btn btn-danger">
                      <i className="zmdi zmdi-download"></i> Button</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card card-success card-flat">
                  <div className="card-block text-center">
                    <i className="zmdi zmdi-nature-people color-success font-big"></i>
                    <h4 className="color-success">Lorem ipsum dolor</h4>
                    <p>Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium.</p>
                    <a href="/" className="btn btn-success">
                      <i className="zmdi zmdi-download"></i> Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default About;
