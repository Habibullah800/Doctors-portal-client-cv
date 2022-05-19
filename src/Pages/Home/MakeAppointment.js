import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center my-28"
    >
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-150px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 p-8 ">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white">Make an Appointment Today</h2>
        <p className="text-white mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rerum
          totam est reiciendis accusantium! Harum in porro totam doloremque cum,
          laborum quisquam dolores commodi neque, reiciendis aliquid doloribus
          ullam repellendus.
        </p>
        <Link to="/appointment">
          <PrimaryButton>Get Started</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default MakeAppointment;
