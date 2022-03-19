import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="p-5" style={{ background: "#F5F7FA" }}>
      <div className="container">
        <div className="contents">
          <h1 className="py-3">Why Choose Us?</h1>
          <div className="boxContainer">
            <div className="row">
              <div
                className=" col-12 col-lg-6  d-flex flex-column align-items-center justify-content-between"
                data-aos="fade-right"
              >
                <div className="miniCard ">
                  <img
                    src="https://paypenny.io/wp-content/uploads/2021/12/1-1.png"
                    alt=""
                  />
                  <h3>We're Fast</h3>
                  <p>90% of our transactions are authorized in minutes</p>
                </div>
                <div className="miniCard">
                  <img
                    src="https://paypenny.io/wp-content/uploads/2021/12/2-1.png"
                    alt=""
                  />
                  <h3>We’re Safe</h3>
                  <p>
                    Our industry-leading technology protects your INR(D) and
                    guarantees it arrives safely every time
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6 " data-aos="fade-left">
                <div className="sideImage">
                  <img
                    src="
                              https://paypenny.io/wp-content/uploads/2021/12/Group-6-1004x1024.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default About;
