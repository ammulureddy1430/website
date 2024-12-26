import React from "react";
export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-md-4">
              <p className="footer-links">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
              </p>
            </div>
            <div className="col-md-4">
              <p className="text-black">
                &copy;  2024 SCS. All rights reserved.{" "}
              </p>
            </div>
            <div className="col-md-4">
              
                <ul className="social">
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"} target="_blank">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
