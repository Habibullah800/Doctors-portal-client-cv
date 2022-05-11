import React, { useState } from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="hero min-h-screen px-12">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="lg:max-w-lg rounded-lg shadow-2xl lg:ml-12"
          alt=""
        />
        <div className="lg:mr-10">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          <p>You have selected: {format(date, "PP")} </p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
