
// Philipp M. Srivastava
// 2021-01-01
//
// Filename: src/index.js
// Description: This file serves as the entrypoint to the
// same eyes website

// Importing tools
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Importing scrrens
import Home from "./screens/home/";

// Ipmorting styles
import "./styles.css";

// Defining app
const App = () => {

  return (
    <Router className="app_screen_container">
      <div className="app_header_container">
        <center className="app_header_title">
         Sam<span className="app_header_title_eyes">e</span>
         Ey<span className="app_header_title_eyes">e</span>s
         </center>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <div className="app_footer_container">
        <a
         href="https://sameeyes.bandcamp.com/"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/bandcamp.png"}
          />
        </a>
        <a
         href="https://open.spotify.com/artist/4FgcfyIpQvBbL61ZuOJtYR?si=2LyN66uZSImCCTC1ofO4yQ"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/spotify.png"}
          />
        </a>
        <a
         href="https://www.instagram.com/sameeyesmusic/"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/instagram.png"}
          />
        </a>
        <a
         href="https://www.youtube.com/channel/UCxNno7iaI2Ejn5RHR4Ad9sw"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/youtube.png"}
          />
        </a>
        <a
         href="https://music.apple.com/gb/artist/same-eyes/1503377567"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/apple.svg"}
          />
        </a>
      </div>
    </Router>
  );
};


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
