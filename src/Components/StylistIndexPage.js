import React, { Component } from 'react';
import StylistMap           from './StylistMap'
class IndexPage extends Component {
  render() {
    let _index = this.props.index.map((i) => {
      return (<StylistMap first_name={i.first_name} last_name={i.last_name} email={i.email} bio={i.bio} image={i.profile_pic} id={i.id}/>)
    })
    return (
      <div className="App">
      <div className="ms-hero-page-override ms-hero-img-city2 ms-hero-bg-primary">
        <div className="container">
          <div className="text-center">
            <h1 className="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Salon
              <span></span> Karma</h1>
            <p className="lead lead-lg color-medium text-center center-block mt-2 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Let the good
              <span className="colorStar">that you do </span>
              <span className="colorStar">bring out the beauty in you</span>.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {_index}
        </div>
      </div>
      </div>
    );
  }
}

export default IndexPage;
