import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/marker.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 px-16 py-6">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      />
      <InfoCard cardTitle="Our Locations" bgClass="bg-accent" img={marker} />
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      />
    </div>
  );
};

export default Info;
