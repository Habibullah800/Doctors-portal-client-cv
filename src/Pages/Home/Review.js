import React from "react";

const Review = ({ review }) => {
  return (
    <div>
      <div className="card lg:w-96 w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Card title!</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            veniam at aperiam cum, incidunt doloremque?
          </p>
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                <img src={review.img} alt="" />
              </div>
            </div>
            <div>
              <h4 className="text-xl"> {review.name} </h4>
              <p> {review.location} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
