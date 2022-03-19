import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="py-5 " style={{ background: "#F0FBFF" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className=" col-6 ">
                <div
                  className="
                footerImage"
                >
                  <img
                    className="footerBrand"
                    src="https://paypenny.io/wp-content/uploads/2021/12/logo-1024x1024.png"
                    alt=""
                  />
                </div>
              </div>
              <div className=" col-6  ">
                <div className="footerImage">
                  <img
                    className="footerSecondBrand"
                    src="https://paypenny.io/wp-content/uploads/2021/12/cmbs-logo-ver4.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h1 className="mb-3">LEGAL</h1>
            <p>
              Trackon Canada private Limted T/as Paypenny is registered with the
              Financial Transactions and Reports Analysis Centre (FINTRAC). To
              view our registration details visit FINTRAC and reference our
              registration number M20726025
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <br />
        <div className="w-100 mb-4   d-flex justify-content-between align-items-center">
          <Link className="text-dark" to="/tc" onClick={() => scrollToTop()}>
            Term & Conditions
          </Link>
          <Link
            className="text-dark"
            to="/privacypolicy"
            onClick={() => scrollToTop()}
          >
            Privacy & Policy
          </Link>
          <Link
            className="text-dark"
            to="/contactus"
            onClick={() => scrollToTop()}
          >
            Contact Us
          </Link>
        </div>
        <div className="row">
          <div className="col-10">
            <p>
              © paypenny all Rights Reserved. The Brand PayPenny belongs to
              Trackon Canada Private Limited registered in Alberta,Canada.
            </p>
          </div>
          <div className="col-2">
            <a href="https://www.facebook.com/PayPennyCa/">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/paypennyca/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://twitter.com/payPENNY2">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
