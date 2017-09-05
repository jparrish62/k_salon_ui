import React, {Component} from 'react';
import Profile            from './StylistProfilePage'
import Navbar             from './Navbar'
import $                  from 'jquery'
class ProfileData extends Component {
  constructor(){
    super();
    this.state = {
      data: [],
      id: ''
    }
  }
  componentWillMount(){
    this.getProfile();
  }

  getProfile(){
    let id = this.props.match.params.id;
    localStorage.setItem('stylist_id', id)
   $.ajax({
     url: `http://api.api_karma_s.dev/stylists/${id}`,
     type: 'GET',
     dataType: 'json',
     contentType: "application/json",
     headers: {"Accept" : "application/vnd.api_bodega_books.v1"},
     cache: false,
     success: (response) => {
       console.log('response',response);
       this.setState({data:response});
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
        <Profile data={this.state.data}/>
      </div>
    )
  }
}

export default ProfileData
