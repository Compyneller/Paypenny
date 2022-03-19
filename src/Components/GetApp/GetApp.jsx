import React from "react";

const GetApp = () => {
  return (
    <div className="py-5" style={{ background: "#F5F7FA" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            <div className="qrcodeBox">
              <h3>Get The App</h3>

              <img
                className="w-100"
                src="https://paypenny.io/wp-content/uploads/2021/12/qr-1024x564.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-lg-6  ">
            <div className="qrcodeBox">
              <h3>Download Paypenny App from anywhere</h3>

              <a
                href="https://apps.apple.com/in/app/paypenny/id1545140323"
                className="appStore"
              >
                <img
                  className="w-50 "
                  src="https://paypenny.io/wp-content/uploads/2021/12/app.png"
                  alt=""
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US"
                className="appStore"
              >
                <img
                  className="w-50"
                  src="https://paypenny.io/wp-content/uploads/2021/12/google.png"
                  alt=""
                />
              </a>

              <div className="socials">
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

        <div className="question mt-5">
          <h1 className="my-4">Frequently Asked Questions</h1>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="questionBox">
                <h1>How can I top up my Paypenny account?</h1>
                <p>
                  You can top up your paypenny account through a bank wire
                  transfer or Interac E- transfer.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="questionBox">
                <h1>Do I need to verify my account?</h1>
                <p>
                  As a fully regulated financial services business, we are
                  required to verify the identity of all our customers. Where
                  possible we attempt to speed up the process through electronic
                  checks. Where this isn’t possible, we require proof of
                  identification.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="bottomLine"></div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default GetApp;
