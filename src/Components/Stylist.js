import React, {Component} from 'react';
import IndexPage          from './StylistIndexPage';
import Footer             from './Footer'
import $                  from 'jquery'
import Navbar             from './Navbar';
class Stylist extends Component {
  constructor(){
    super();
    this.state = {
      index:[]
    }
  }
  componentWillMount(){
    this.getStylist();
  }

 getStylist(){
   $.ajax({
     url: 'http://api.api_karma_s.dev/stylists',
     type: 'GET',
     dataType: 'json',
     contentType: "application/json",
     headers: {"Accept" : "application/vnd.api_bodega_books.v1"},
     cache: false,
     success: (response) => {
       console.log('response',response);
       this.setState({index:response});
     },
     error: function(xhr, status, err){
       console.log(err);
     }
   });
 }

  render(){
    return (
      <div>
        <Navbar/>
        <IndexPage index={this.state.index}/>
        <Footer/>
      </div>
    )
  }
}

export default Stylist;
