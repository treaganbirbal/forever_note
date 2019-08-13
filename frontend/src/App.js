import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from 'axios';

import LandingPage from "./components/landing_page";

class App extends React.Component {
  
  componentDidMount(){
    axios.get('/users')
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }
  
  render(){
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
  }
}

export default App;
