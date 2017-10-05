import React, { Component } from 'react';
import {Link, withRouter}   from 'react-router-dom'
import '../Styles/styles.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import $                    from 'jquery';
class SignUp extends Component {


  handleRegistration(e){
    $.ajax({
      url: "http://api.api_karma_s.dev/users.json",
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify({user:{email: this.email.value, password: this.password.value, password_confirmation: this.re_password.value,user_name: this.user_name.value}}),
      contentType: "application/json",
      headers: {"Accept" : "application/vnd.api_karma_s.v1"},
      cache: false,
      success: (response) => {
        console.log(response);
        localStorage.setItem('user_id', response.id)
        localStorage.setItem('role', response.role)
        localStorage.setItem('auth_token', JSON.stringify(response.auth_token))
        return this.props.history.push("/");
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    });
    e.preventDefault();
  }
  render() {
    return (
      <div className="App">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={1500}
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={200}
        transitionName={'home'}
      >
      <div className="bg-full-page ms-hero-bg-dark ms-hero-img-airplane back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card color-dark shadow-6dp animated fadeIn animation-delay-7">
            <div className="ms-hero-bg-primary ms-hero-img-mountain">
              <h2 className="text-center no-m pt-4 pb-4 color-white index-1">SignUp Form</h2>
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
                          <i className="zmdi zmdi-account"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-user">Username</label>
                        <input ref={(user_name) => {this.user_name = user_name;}} type="text" id="ms-form-user" className="form-control"/> </div>
                    </div>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-email"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-email">Email</label>
                        <input ref={(email) => {this.email = email;}}type="email" id="ms-form-email" className="form-control"/> </div>
                    </div>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-lock"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-pass">Password</label>
                        <input ref={(password) => {this.password = password;}} type="password" id="ms-form-pass" className="form-control"/> </div>
                    </div>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-lock"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-pass">Re-type Password</label>
                        <input ref={(re_password) => {this.re_password = re_password;}}type="password" id="ms-form-pass" className="form-control"/> </div>
                    </div>
                    <button onClick={this.handleRegistration.bind(this)} className="btn btn-raised btn-block btn-primary">Register Now</button>
                  </fieldset>
                </form>
                </div>

              </div>
            </div>
          </div>
          <div className="text-center animated fadeInUp animation-delay-7">
            <Link to={'/'} className="btn btn-white">
              <i className="zmdi zmdi-home"></i> Go Home</Link>
          </div>
        </div>
      </div>
      </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withRouter(SignUp);
