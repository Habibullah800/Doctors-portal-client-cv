import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card  lg:max-w-lg  bg-base-100 shadow-xl">
        <div className="card-body  text-center">
          <h2 className="card-title text-secondary mx-auto"> {name} </h2>
          <p>
            {slots.length > 0 ? (
              <span> {slots[0]} </span>
            ) : (
              <span className="text-red-500"> Try another day </span>
            )}
          </p>
          <p>
            {" "}
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available{" "}
          </p>
          <div className="card-actions justify-center">
            <button
              disabled={slots.length === 0}
              className="btn btn-secondary text-white uppercase mt-2"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
