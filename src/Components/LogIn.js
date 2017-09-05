import React, { Component } from 'react';
import {Link}               from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory';
import $                    from 'jquery'
const history = createBrowserHistory();
class LogIn extends Component {

  handleLogIn(e){
    let payload = {email:this.email.value, password:this.password.value,
                   user_name:this.user_name.value}
    $.ajax({
      url: "http://api.api_karma_s.dev/sessions",
      type: 'POST',
      dataType: 'json',
      data: JSON.stringify({session:payload}),
      contentType: "application/json",
      headers: {"Accept" : "application/vnd.api_karma_s.v1"},
      cache: false,
      success: (response) => {
        console.log(response);
        localStorage.setItem('user_id', response.id)
        localStorage.setItem('auth_token', response.auth_token)
        if(response){return window.location.asign('/Home')}
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
      <div className="bg-full-page ms-hero-bg-dark ms-hero-img-airplane back-fixed">
        <div className="mw-500 absolute-center">
          <div className="card color-dark shadow-6dp animated fadeIn animation-delay-7">
            <div className="ms-hero-bg-primary ms-hero-img-mountain">
              <h2 className="text-center no-m pt-4 pb-4 color-white index-1">Login Form</h2>
            </div>
            <ul className="nav nav-tabs nav-tabs-full nav-tabs-3 nav-tabs-transparent indicator-primary" role="tablist">
              <li role="presentation" className="active">
                <Link to={'LogIn'} aria-controls="ms-login-tab" role="tab" data-toggle="tab" className="withoutripple">
                  <i className="zmdi zmdi-account"></i> Login</Link>
              </li>
              <li role="presentation">
                <Link to={'/SignUp'} aria-controls="ms-register-tab" role="tab" data-toggle="tab" className="withoutripple">
                  <i className="zmdi zmdi-account-add"></i> Register</Link>
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
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-user">Email</label>
                          <input ref={(email) => {this.email = email;}} type="text" id="ms-form-user" className="form-control"/> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass">Password</label>
                          <input ref={(password) => {this.password = password;}}type="password" id="ms-form-pass" className="form-control"/> </div>
                      </div>
                      <div className="row ">
                        <div className="col-xs-5">
                          <div className="form-group no-mt">
                            <div className="checkbox">
                              <label>
                                <input type="checkbox"/> Remember </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-xs-7">
                          <button onClick={this.handleLogIn.bind(this)}className="btn btn-raised btn-primary pull-right">Login</button>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="ms-register-tab">
                  <form>
                    <fieldset>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-account"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-user">Username</label>
                          <input type="text" id="ms-form-user" className="form-control"/> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-email"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-email">Email</label>
                          <input type="email" id="ms-form-email" className="form-control"/> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass">Password</label>
                          <input type="password" id="ms-form-pass" className="form-control"/> </div>
                      </div>
                      <div className="form-group label-floating">
                        <div className="input-group">
                          <span className="input-group-addon">
                            <i className="zmdi zmdi-lock"></i>
                          </span>
                          <label className="control-label" htmlFor="ms-form-pass">Re-type Password</label>
                          <input type="password" id="ms-form-pass" className="form-control"/> </div>
                      </div>
                      <button className="btn btn-raised btn-block btn-primary">Register Now</button>
                    </fieldset>
                  </form>
                </div>
                <div role="tabpanel" className="tab-pane fade" id="ms-recovery-tab">
                 <form>
                  <fieldset>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-account"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-user">Username</label>
                        <input type="text" id="ms-form-user" className="form-control"/> </div>
                    </div>
                    <div className="form-group label-floating">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i className="zmdi zmdi-email"></i>
                        </span>
                        <label className="control-label" htmlFor="ms-form-email">Email</label>
                        <input type="email" id="ms-form-email" className="form-control"/> </div>
                    </div>
                    <button className="btn btn-raised btn-block btn-primary">Send Password</button>
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
      </div>
    );
  }
}

export default LogIn;
