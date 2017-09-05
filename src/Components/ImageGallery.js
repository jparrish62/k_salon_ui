import React, {Component} from 'react';
import Navbar             from './Navbar';
import Images             from './Images';
import Footer             from './Footer'
class ImageGallery extends Component {

  render(){
    return(
      <div>
        <Navbar/>
        <Images/>
        <Footer/>
      </div>
    )
  }
}

export default ImageGallery;
