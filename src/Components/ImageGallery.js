import React, {Component} from 'react';
import Navbar             from './Navbar';
import MapImages          from './MapImages';
import Footer             from './Footer'
import $                  from 'jquery';
class ImageGallery extends Component {
  constructor(){
    super();
    this.state = {
      image: []
    }
  }
  componentWillMount(){
    this.getImages();
  }

  getImages(){
    let id         = localStorage.getItem('stylist_id');
   $.ajax({
     url: `http://api.api_karma_s.dev/stylists/${id}`,
     type: 'GET',
     dataType: 'json',
     contentType: "application/json",
     headers: {"Accept" : "application/vnd.api_bodega_books.v1"},
     cache: false,
     success: (response) => {
       console.log('response',response);
       console.log('images', response.image_portfolios);
       this.setState({image:response.image_portfolios})
     },
     error: function(xhr, status, err){
       console.log(err);
     }
   });
  }
  render(){
    return(
      <div>
        <Navbar/>
        <MapImages image={this.state.image}/>
        <Footer/>
      </div>
    )
  }
}

export default ImageGallery;
