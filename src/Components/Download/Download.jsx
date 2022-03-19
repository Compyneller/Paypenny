import React from "react";
import "./download.css";

const Download = () => {
  return (
    <div className="downloadContainer  ">
      <div className="container">
        <div className="row ">
          <div
            className="col-12 col-lg-6 my-auto downloadButtons  "
            data-aos="fade-up"
          >
            <h1>Hundreds of thousands of NRIs trust Paypenny</h1>
            <h3>
              Get the highest exchange rates guaranteed. Download Paypenny now
              and experience the difference.
            </h3>

            <button className="d-block">
              <i className="fa-brands fa-google-play " />
              Download PayPenny App
            </button>
            <button className="d-block">
              <i className="fa-brands fa-apple "></i>Download PayPenny App
            </button>
          </div>
          <div className="col-12 col-lg-6" data-aos="fade-down">
            <div className="rightImage">
              <img
                src="https://paypenny.io/wp-content/uploads/2021/12/final.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
