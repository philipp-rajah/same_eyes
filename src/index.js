
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
