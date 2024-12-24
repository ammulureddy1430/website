import React from "react";
export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="row">
          <div class="col-xl-5">
            <div class="service-style1__title">
              <div class="sec-title sec-title--style2">
                <div class="sub-title">
                  <div class="border-box"></div>
                  <div className="text-white">WHAT WE DO</div>
                </div>
                <h2>Services We're <br /> Offering</h2>
              </div>
              <div className="inner-text">
                <p>Our service portfolio includes innovative and flexible solutions to meet the unique
                  computer requirements of the end-users</p>
              </div>
              <div className="image_holder_box">
                <span className="services_title_img">
                  <img src="img/services/service_style.jpg" />
                </span>
                <span className="services_title">
                  <h3>Consultancy Services</h3>
                </span>
              </div>
            </div>
          </div>
          <div className="service_rightContent">
            <div className="col-xl-7">
              <div class="service-style1__content">
                <div className="row">
                  {props.data
                    ? props.data.map((d, i) => (
                      <div key={`${d.name}-${i}`} className="col-xl-6 col-lg-6 col-md-6">
                        {" "}
                        <a href="#">
                        <div className="service_style">
                        <span className="servicesImg">
                          <img src={d.image} alt={d.name} />
                        </span>
                        <div className="service-desc">
                          <h3>{d.name}</h3>
                        </div>
                        </div>
                        </a>
                        
                      </div>
                    ))
                    : "loading"}

                </div>
              </div>
            </div>
            <div className="col-mt-3">
              <span>
              <a className="btn-services" href="#">
                <span className="btn-text">
                  View All
                </span>
              </a>    
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
