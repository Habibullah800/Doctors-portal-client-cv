import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen lg:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:max-w-lg rounded-lg shadow-2xl lg:ml-12"
          alt=""
        />
        <div className="lg:mr-10">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
