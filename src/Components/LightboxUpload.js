import React, { Component } from 'react';
import Dropzone             from 'react-dropzone'
import createBrowserHistory from 'history/createBrowserHistory'
import request              from 'superagent';
import {Link, withRouter}               from 'react-router-dom';
import $                    from 'jquery';
const history = createBrowserHistory();
const CLOUDINARY_UPLOAD_PRESET = 'spldj9cn';
const CLOUDINARY_UPLOAD_URL    = 'https://api.cloudinary.com/v1_1/dfqfircuv/upload';
class LightboxUpload extends Component {
  constructor(props){
    super(props);
    this.state = {
      uploadedImage: ''
    }
  }

onImageDrop(files){
  this.setState({uploadedFile:files[0]});
  this.handleImageUpload(files[0]);

}

handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({uploadedImage: response.body.secure_url});
      }
    });
  }
  handleSubmit(e){
    let stylist_id = this.props.match.params.id;
    let image      = this.state.uploadedImage
    let auth_token = localStorage.getItem('auth_token');
    let user_id    = localStorage.getItem('user_id');
    $.ajax({
      url: `http://api.api_karma_s.dev/users/${user_id}/stylists/${stylist_id}/image_portfolios.json`,
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify({image_portfolio:{caption: this.caption.value, image:image}}),
      contentType: "application/json",
      headers: {'Authorization' : auth_token.replace(/"/g,""), "Accept" : "application/vnd.api_karma_s.v1"},
      cache: false,
      success: (response) => {
        console.log(response);
        return this.props.history.push('/gallery' + stylist_id)
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    });
    e.preventDefault();

  }
  render() {
    console.log('image:', this.state);
    let string = this.state;
    console.log('string', string);
    return (
      <div className="App">
      <div className="bg-full-page ms-hero-bg-dark ms-hero-img-airplane back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card color-dark shadow-6dp animated fadeIn animation-delay-7">
            <div className="ms-hero-bg-primary ms-hero-img-mountain">
              <h2 className="text-center no-m pt-4 pb-4 color-white index-1">Add Images</h2>
            </div>
            <ul className="nav nav-tabs nav-tabs-full nav-tabs-3 nav-tabs-transparent indicator-primary" role="tablist">
              <li role="presentation" className="active">
                <Link to={'/LogIn'} aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="withoutripple">
                  <i className="zmdi zmdi-account"></i> Login</Link>
              </li>
              <li role="presentation">
                <Link to={'/SignUp'} aria-controls="ms-register-tab" role="tab" data-toggle="tab" className="withoutripple">
                  <i className="zmdi zmdi-account-add"></i> Register</Link>
              </li>
              <li role="presentation">

              </li>
            </ul>
            <div className="card-block">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane fade active in" id="ms-login-tab">
                <form>
                  <fieldset>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-comment-alert"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-email">Caption</label>
                        <input ref={(caption) => {this.caption = caption;}}type="textl" id="ms-form-email" className="form-control"/> </div>
                    </div>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-lock"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-pass">Image</label>
                        <Dropzone
                          multiple={false}
                          accept="image/*"
                          onDrop={this.onImageDrop.bind(this)}>
                          <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                        <div>
                          {this.state.uploadedImage === '' ? null :
                          <div>
                            <img src={this.state.uploadedImage} alt="..." />
                          </div>}
                          <button onClick={this.handleSubmit.bind(this)} className="btn btn-raised btn-block btn-primary">Upload</button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </form>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center animated fadeInUp animation-delay-7">
            <Link to={'/'} className="btn btn-white">
              <i className="zmdi zmdi-home"></i>Go Home</Link>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default withRouter(LightboxUpload);
