
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
import { Cascader } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import reportWebVitals from "./reportWebVitals";

// Importing scrrens
import Home from "./screens/home/";

// Ipmorting styles
import "./styles.css";
import "antd/dist/antd.css";

// Defining app
const App = () => {

  // Defining menu options
  const menuOptions = [
    "About",
    "Media",
    "Desperate Ones",
    "Newest Works",
    "Contact Us"
  ];

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
           className="app_sm_icon"
          />
        </a>
        <a
         href="https://open.spotify.com/artist/4FgcfyIpQvBbL61ZuOJtYR?si=2LyN66uZSImCCTC1ofO4yQ"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/spotify.png"}
           className="app_sm_icon"
          />
        </a>
        <a
         href="https://www.youtube.com/channel/UCxNno7iaI2Ejn5RHR4Ad9sw"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/youtube.png"}
           className="app_sm_icon"
          />
        </a>
        <a
         href="https://music.apple.com/gb/artist/same-eyes/1503377567"
         target="_blank"
         rel="noopener noreferrer"
        >
          <img
           src={process.env.PUBLIC_URL + "/images/icons/apple.svg"}
           className="app_sm_icon"
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
