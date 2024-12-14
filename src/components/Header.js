import React from "react";
import Typewriter from "typewriter-effect"
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1 className="heading-title">
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                  <span className="main-element theme-color">
                    <Typewriter className="typewriter"
                      onInit={(typewriter) => {
                          typewriter
                              .typeString("Web Developers")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("Creative")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("Ambitious")
                              .start()
                      }} 
                    />
                  </span>
                </h1>
                
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="btn-bar">
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Get Started
                  </a>{" "}
                  <a 
                    href="#" 
                    className="btn btn-custom-outline"
                  >
                    Contact Us
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
