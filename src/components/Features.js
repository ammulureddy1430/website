import React from "react";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
          <div className="icon-holder"></div>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-sm-6 col-md-3 col-lg-3 features_content">
                  {" "}
                  {/* <i className={d.icon}></i> */}
                  <span className="featuresImg">
                    <img src={d.img} alt={d.title} />
                  </span>
                  <span className="features_desc">
                    <h3>{d.title}</h3>
                    <p className="text-black">{d.text}</p>
                  </span>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
