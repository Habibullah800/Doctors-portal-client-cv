import React from "react";
import Service from "./Service";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";
import treatment from "../../assets/images/treatment.png";

const Services = () => {
  return (
    <div className="mt-24">
      <div className="lg:px-16">
        <div>
          <h6 className="text-l font-bold text-center text-primary mb-2">
            {" "}
            OUR SERVICES{" "}
          </h6>
          <h3 className="text-2xl text-center text-accent">
            {" "}
            Services We Provide{" "}
          </h3>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 gap-8 ">
          <Service
            description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
            title="Fluride Treatment"
            img={fluoride}
          />
          <Service
            description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
            title="Cavity Filling"
            img={cavity}
          />
          <Service
            description="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
            title="Teeth Whitening"
            img={whitening}
          />
        </div>
      </div>
      <div className="mt-24 lg:ml-24">
        <div className="lg:flex lg:items-center  card lg:card-side shadow-xl">
          <figure className="lg:w-96 w-full lg:mx-16">
            <img src={treatment} alt="Album" />
          </figure>
          <div className="card-body lg:w-80 ">
            <h2 className="card-title text-5xl text-accent">
              Exceptional Dental <br /> Care, on Your Terms
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <div className="card-actions  ">
              <button className="btn btn-primary  uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
