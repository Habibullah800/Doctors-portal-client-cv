import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Contact = () => {
  return (
    <section
      className="p-10"
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div>
        <h5 className="text-primary text-xl text-center font-bold">
          Contact Us
        </h5>
        <h3 className="text-center text-white text-2xl">
          Stay connected with us
        </h3>
      </div>
      <div className="grid grid-rows-1 gap-4 lg:w-96 w-full mx-auto mt-5">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered input-md w-full max-w-l"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered input-md w-full max-w-l"
        />

        <textarea
          type="text"
          placeholder="Your Message"
          className="input input-bordered input-lg w-full max-w-l"
        />
      </div>
      <div className="text-center mt-5">
        <PrimaryButton>Submit</PrimaryButton>
      </div>
    </section>
  );
};

export default Contact;
