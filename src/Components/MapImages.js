import React, {Component} from 'react';
import Images from './Images'
class MapImages extends Component {
  render(){
    console.log('props', this.props);
    let image = this.props.image.map((img) => {
      return <Images images={img.image} cap={img.caption}/>
    })
    return (
      <div>
        <div className="ms-hero-page-override ms-hero-img-city2 ms-hero-bg-primary color-primary"></div>
        <div className="text-center mb-6">
          <h1 className="no-m ms-site-title color-primary center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Gallery</h1>
          <p className="lead lead-lg color-primary text-center center-block mt-2 mb-4 mw-800 text-uppercase fw-300 animated fadeInUp animation-delay-7">Discover our projects and the
            <span className="colorStar">rigorous process</span> of creation. Our principles are creativity, design, experience and knowledge.</p>
        </div>
        <div className="container">
          <div className="row">
          {image}
          </div>
        </div>
      </div>
    )
  }
}

export default MapImages;
