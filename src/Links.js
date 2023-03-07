import React from "react";
import "./Task.scss";
import { FaBars } from "react-icons/fa";

const Links = () => {
  return (
    <>
      <div className="nav">
        <div className="icon">
          <FaBars />
        </div>
        <div className="heading">
          <h1>ACME Industries</h1>
        </div>
      </div>
    </>
  );
};

export default Links;
