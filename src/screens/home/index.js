
// Philipp M. Srivastava
// 2021-01-01
//
// Filename: src/index.js
// Description: This file serves as the home
// page of the same eyes website

// Importing tools
import React from "react";
// Importing content
import { content } from "./content";

// Importing styles
import "../../styles.css";
import "./styles.css";

// Defining home component
const Home = (props) => {

  return (
    <div className="home_screen_container">
      <iframe
       className="home_media"
       id="home_video"
       width="100%"
       height="600px"
       background-color="black"
       src="https://www.youtube.com/embed/agarHHEmhbU"
       frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       allowfullscreen>
      </iframe>
      {
        content.map((c, index) => {
          // switching on content type
          switch(c.type) {
            case "text":
              return (
                <div className="home_section_div">
                  <center>
                    <span className="home_title">{c.title}</span>
                    <div className="home_text_container">
                      {
                        c.desperateOnes &&
                        <img
                         className="home_desperate_logo"
                         src={process.env.PUBLIC_URL + c.media}
                        />
                      }
                      <p
                       className={c.largeContent ? "home_text_large" : "home_text"}
                       id={c.desperateOnes && "home_desparateAdjustments"}
                       >
                       {c.content}
                      </p>
                    </div>
                    {
                      c.source &&
                      <span className={c.largeContent ? "home_text_large" : "home_text"}>
                       -{c.source}
                      </span>
                    }
                  </center>
                </div>
              );

            case "img":
              return (
                <img
                 className="home_media"
                 src={process.env.PUBLIC_URL + c.source}
                />
              );

            default:
              return;
          }
        })
      }
      <div className="home_section_div">
        <center>
          <div className="home_title">
            Newest Works
          </div>
          <img
           className="home_albumCover"
           src={process.env.PUBLIC_URL + "/images/sameeyes.png"}
          />
        </center>
      </div>
      <img
       className="home_media"
       src={process.env.PUBLIC_URL + "/images/same_eyes_both_one.png"}
      />
      <div className="home_section_div" id="home_contact">
        <center>
          <div className="home_title" id="home_contact_text">
            Contact Us
          </div>
          <br/><br/>
          <span className="home_text_large" id="home_contact_text">
           Email us at:
          </span>
          <br/><br/>
          <span className="home_text_large" id="home_contact_text">
           sameeyesmusic@gmail.com
          </span>
          <br/><br/>
          <span className="home_text_large" id="home_contact_text">
           Write us fan mail and send us records:
          </span>
          <br/><br/>
          <span className="home_text_large" id="home_contact_text">
          1101 W. Liberty St.</span>
          <br/>
          <span className="home_text_large" id="home_contact_text">
          Ann Arbor, MI 48103</span>
          <br/>
          <span className="home_text_large" id="home_contact_text">
          United States</span><br/>
        </center>
      </div>
    </div>
  );
};

// exporting
export default Home;
