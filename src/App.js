import React from 'react';
import logo from './images/portrait1.png';
import './App.css';
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Thomas Bradford
        </h1>
        <div id="wrapper">
          <div id="left">
            <a href="http://www.facebook.com/JAT236" target="_blank">
            <FacebookIcon size={50} round={true}/> 
            </a>
          </div>
          <div id="middle">
            <a href="mailto:tdb_1998@hotmail.com"></a>
            <EmailIcon size={50} round={true}/>
          </div>
          <div id="right">
            <a href="https://www.linkedin.com/in/thomas-bradford/" target="_blank">
            <LinkedinIcon size={50} round={true}/> 
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
