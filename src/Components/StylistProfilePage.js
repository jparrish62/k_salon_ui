import React, { Component } from 'react';
import 'react-date-picker/index.css'
import {Link} from 'react-router-dom'
import $ from 'jquery'
class Profile extends Component {
  constructor(){
    super();
    this.state = {
      errors: ''
    }
  }

  createAppointment(e){
    let stylist_id = localStorage.getItem('stylist_id');
    let auth_token = localStorage.getItem('auth_token');
    let user_id    = localStorage.getItem('user_id');
    $.ajax({
      url: `http://api.api_karma_s.dev//users/${user_id}/stylists/${stylist_id}/appointments.json`,
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify({appointment:{basic_services: this.basic_services.value, chemical_services: this.chemical_services.value, color_services: this.color_services.value,
                                         treatment_services:this.treatment_services.value, braids:this.braids.value, start_time: this.date.value, name: this.name.value, comment: this.comment.value  }}),
      contentType: "application/json",
      headers: {'Authorization' : auth_token.replace(/"/g,""), "Accept" : "application/vnd.api_karma_s.v1"},
      cache: false,
      success: (response) => {
        console.log(response);
      },
      error: (xhr, status, errors) => {
        console.log(errors.message);
        this.setState({errors});
      }
    })
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
      <div className="ms-hero-page-override ms-hero-img-coffee ms-bg-fixed ms-hero-bg-primary">
        <div className="container">
          <div className="text-center mt-2">
            <img src={this.props.data.profile_pic} alt="..." className="ms-avatar-hero animated zoomIn animation-delay-7"/>
            <h1 className="color-white mt-4 animated fadeInUp animation-delay-10">{this.props.data.first_name}</h1>
            <h3 className="color-medium no-mb animated fadeInUp animation-delay-10">@anasanz</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="card card-hero card-primary animated fadeInUp animation-delay-7">
          <div className="card-header-100 bg-primary-dark">
            <div className="row">
              <div className="col-sm-2 col-xs-4 col-sm-offset-3">
                <div className="item">
                  <span>142</span>Posts </div>
              </div>
              <div className="col-sm-2 col-xs-4">
                <div className="item">
                  <span>75</span>Comments </div>
              </div>
              <div className="col-sm-2 col-xs-4">
                <div className="item">
                  <span>96</span>Tweets </div>
              </div>
            </div>
          </div>
          <div className="row">
          <form>
            <div className="col-md-4">
              <div className="card-block">
                <h2 className="color-primary no-mb">{this.state.errors ? 'Sorry Date Unavailable' : 'Create an appointment'}</h2>
              </div>
              <table className="table table-no-border table-striped">
                <tr>
                  <th>
                    <i className="zmdi zmdi-account mr-1 color-royal"></i>Name</th>
                  <td><input ref={(name) => {this.name = name;}} className="form-control"/></td>
                </tr>
                <tr>
                  <th>
                    <i className="zmdi zmdi-calendar mr-1 color-info"></i>Date</th>
                  <td>
                    <input ref={(date) => {this.date = date;}} type="datetime-local" id="ms-form-user" className="form-control"/>
                  </td>
                </tr>

                <tr>
                  <th>
                    <i className="zmdi zmdi-comments"></i>&nbsp;Comm</th>
                  <td>
                  <input ref={(comment) => {this.comment = comment;}} type="text" id="ms-form-user" className="form-control"/>
                  </td>
                </tr>
                <tr>
                  <th>
                    </th>
                  <td>
                    <div className="col-xs-7">
                      <button onClick={this.createAppointment.bind(this)} className="btn btn-raised btn-primary pull-right">Create Appointment</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    <i className="zmdi zmdi-view-comfy"></i> View</th>
                  <Link to={'/gallery/' + localStorage.getItem('stylist_id')} id={localStorage.getItem('stylist_id')}><td>Recent Work</td></Link><Link to={'/imgUpload/' + localStorage.getItem('stylist_id')} id={localStorage.getItem('stylist_id')}><td>Add Work</td></Link>
                </tr>
              </table>
            </div>
            <div className="col-md-4">
              <div className="card-block">
                <h2 className="color-primary"><br/></h2>
                <div className="media mb-3">
                  <div className="media-left">
                  </div>
                  <div className="media-body">
                    <h4 className="no-m">
                      <a href="#">Basic Services</a>
                    </h4>
                    <select ref={(basic_services) => {this.basic_services = basic_services;}}>
                      <option>None</option>
                      <option>Basic Wash and Blow Dry</option>
                      <option>Trim</option>
                      <option>Eyelashes</option>
                      <option>Eyebrows</option>
                      <option>Haircut-starting</option>
                      <option>Childrens cornrows</option>
                      <option>Flats Twist Styles</option>
                      <option>Ponytails</option>
                      <option>Wrap Curl</option>
                      <option>Roller Set</option>
                      <option>Flexi Rod Set</option>
                      <option>Rod Set</option>
                      <option>Twist Out</option>
                      <option>Braid Out</option>
                      <option>Silk Wrap Press</option>
                      <option>Doobie wrapped and pinned</option>
                      <option>Starter Locs</option>
                      <option>Loc Re-twist</option>
                      <option>Loc Style</option>
                    </select>
                  </div>
                </div>
                <div className="media mb-3">
                  <div className="media-left">
                  </div>
                  <div className="media-body">
                    <h4 className="no-m">
                      <a href="#">Chemical Services</a>
                    </h4>
                    <select ref={(chemical_services) => {this.chemical_services = chemical_services;}}>
                      <option>None</option>
                      <option>Relaxer touch-up</option>
                      <option>Relaxer touch-up, wrap and curl</option>
                      <option>Relaxer touch-up, roller set </option>
                      <option>Partial Relaxer</option>
                      <option>Curly Perm</option>
                    </select>
                  </div>
                </div>
                <div className="media mb-3">
                  <div className="media-left">
                  </div>
                  <div className="media-body">
                    <h4 className="no-m">
                      <a href="#">Color Services</a>
                    </h4>
                    <select ref={(color_services) => {this.color_services = color_services;}}>
                      <option>None</option>
                      <option>Semi-permanent color</option>
                      <option>Demi permanent color</option>
                      <option>Permanent color</option>
                      <option>Highlights</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-block">
                <h2 className="color-primary"> <br/></h2>
                <div className="ms-media-list">
                  <div className="media">
                    <div className="media-left media-middle">
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading color-warning">Treatment Services</h4>
                      <select ref={(treatment_services) => {this.treatment_services = treatment_services;}}>
                      <option>None</option>
                      <option>Deep Conditioner</option>
                      <option>Steam Treatment</option>
                      <option>Hair and scalp treatment</option>
                      </select>

                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left media-middle">
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading color-warning">Weave</h4>
                      <select ref={(weave) => {this.weave = weave;}}>
                        <option>None</option>
                        <option>Deep Conditioner</option>
                        <option>Weave wash and recurl </option>
                        <option>Custom U-part Wigs</option>
                        <option>Full Head sew in weave install</option>
                        <option>Quick weave</option>
                      </select>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left media-middle">
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading color-warning">Braids</h4>
                      <select ref={(braids) => {this.braids = braids;}}>
                        <option>None</option>
                        <option>Havana Twists</option>
                        <option>Marley Twist</option>
                        <option>Childrens cornrows</option>
                        <option>Box braid</option>
                        <option>Micro Braids</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Profile;
