import React from "react";
import logoReact from "../assets/images/logos/react.png";
import logoGatsby from "../assets/images/logos/gatsby.png";
import logoGraph from "../assets/images/logos/graphql2.png";
import logoStrapi from "../assets/images/logos/strapi.png";
import logoMongo from "../assets/images/logos/mongodb.png";

export const Prefooter = () => {
  return (
    <div className="pt-5 mt-5 row d-flex flex-column justify-content-center">
      <div className="col-12 ">
        <h3
          className="text-center font-weight-bold
        "
        >
          This portfolio was built with JAMSTACK
        </h3>
      </div>
      <div className="col-12 row d-flex align-items-center justify-content-evenly prefooter">
        <img
          className="prefooter__img__logo col-6 col-md-4 col-lg-2"
          src={logoReact}
          alt=""
        />
        <img
          className="prefooter__img__logo col-6 col-md-4 col-lg-2"
          src={logoGatsby}
          alt=""
        />
        <img
          className="prefooter__img__logo col-6 col-md-4 col-lg-2"
          src={logoGraph}
          alt=""
        />
        <img
          className="prefooter__img__logo col-6 col-md-4 col-lg-2"
          src={logoStrapi}
          alt=""
        />
        <img
          className="prefooter__img__logo col-6 col-md-4 col-lg-2"
          src={logoMongo}
          alt=""
        />
      </div>
    </div>
  );
};
