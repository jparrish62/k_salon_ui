import React                                    from 'react';
import ReactDOM                                 from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import                                               './index.css';
import App                                      from './App';
import registerServiceWorker                    from './registerServiceWorker';
import ProfileData                              from './Components/profileData';
import LogIn                                    from './Components/LogIn';
import SignUp                                   from './Components/SignUp';
import Stylist                                  from './Components/Stylist';
import About                                    from './Components/About';
import CreateStylist                            from './Components/CreateStylist';
import ImageGallery                             from './Components/ImageGallery';
import LightboxUpload                           from './Components/LightboxUpload';
import Home                                     from './Components/Home';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/"                    component={Home}/>
      <Route exact path="/Home"                component={Home}/>
      <Route exact path="/LogIn"               component={LogIn}/>
      <Route exact path="/SignUp"              component={SignUp}/>
      <Route exact path="/Stylist"        render={() => (localStorage.getItem('user_id') ? (<Stylist/>) : (<Redirect to="/LogIn"/>))}/>
      <Route exact path="/profileData/:id"     component={ProfileData}/>
      <Route exact path="/CreateStylist"  render={() => (localStorage.getItem('role') == "admin" ? (<CreateStylist/>) : (<Redirect to="/Home"/>))}/>
      <Route exact path="/About"               component={About}/>
      <Route exact path="/gallery/:id"         component={ImageGallery}/>
      <Route exact path="/imgUpload/:id"       component={LightboxUpload}/>
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
