import React, {Component} from 'react';
import {Link}             from  'react-router-dom'
class StylistMap extends Component {

  render(){
    return(
      <div>
        <div className="col-md-4 col-sm-6">
          <div className="card mt-4 card-primary wow zoomInUp animation-delay-7">
            <div className="ms-hero-bg-primary ms-hero-img-city">
              <Link to={'/profileData/' + this.props.id} id={this.props.id}><img src={this.props.image} alt="..." className="img-avatar-circle"/></Link> </div>
            <div className="card-block pt-6 text-center">
              <Link to={'/profileData/' + this.props.id} id={this.props.id}><h3 className="color-primary">{this.props.first_name} {this.props.last_name}</h3></Link>
              <p>{this.props.bio}</p>
              <a href="/" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook">
                <i className="zmdi zmdi-facebook"></i>
              </a>
              <a href="/" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter">
                <i className="zmdi zmdi-twitter"></i>
              </a>
              <a href="/" className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram">
                <i className="zmdi zmdi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StylistMap;
