import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
export const Header = (props) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Developers", "Creative", "Ambitious"],
      typeSpeed: 100,
      backSpeed:60,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
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
                  <span className="main-element theme-color" ref={el} />
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
                    href="#contact" 
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
