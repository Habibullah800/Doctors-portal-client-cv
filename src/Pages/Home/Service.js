import React from "react";

const Service = ({ img, title, description }) => {
  return (
    <div>
      <div className="card lg:w-96 w-full  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title} </h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
