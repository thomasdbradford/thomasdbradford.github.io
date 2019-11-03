import React from 'react';
import logo from './images/portrait1.png';
import './App.css';
import {
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,
  EmailIcon,
} from 'react-share';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,
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
