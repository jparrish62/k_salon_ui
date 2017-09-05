import React, { Component } from 'react';
import Navbar from './Components/Navbar'
import Home       from './Components/Home'
import Footer     from './Components/Footer'

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: localStorage.getItem('user_token')
    }
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>

    );
  }
}

export default App;
