import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Info />
      <Services />
      <MakeAppointment />
      <Testimonial />
    </div>
  );
};

export default Home;
