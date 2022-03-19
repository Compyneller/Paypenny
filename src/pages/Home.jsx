import React from "react";
import About from "../Components/About/About";
import Benefits from "../Components/Benefits/Benefits";
import CreateAccount from "../Components/CreateAccount/CreateAccount";
import Download from "../Components/Download/Download";
import GetApp from "../Components/GetApp/GetApp";
import PaymentApp from "../Components/PaymentApp/PaymentApp";
import VideoSection from "../Components/VideoSection/VideoSection";

const Home = () => {
  return (
    <>
      <VideoSection />
      <Download />
      <CreateAccount />
      <Benefits />
      <About />
      <PaymentApp />
      <GetApp />
    </>
  );
};

export default Home;
