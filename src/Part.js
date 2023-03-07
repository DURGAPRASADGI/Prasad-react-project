import React from "react";
import { FaGlobeAfrica, FaUser, FaYoutube } from "react-icons/fa";

const Part = ({ z, c1, p, e, w }) => {
  return (
    <>
      <div className="menu">
        <div className="menu-header">
          <h3>{c1}</h3>
        </div>
        <div className="menu-bar">
          <div className="avtar">
            <img src={z} alt="" />
          </div>
          
          <div className="menu-Links">
            <div className="menu-item">
              <div className="micon">
                <FaUser style={{ color: "green" }} />
              </div>
              <div className="mtext">
                <h4>{p}</h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="micon">
                <FaYoutube style={{ color: "red" }} />
              </div>
              <div className="mtext">
                <h4>{e}</h4>
              </div>
            </div>

            <div className="menu-item">
              <div className="micon">
                <FaGlobeAfrica style={{ color: "blue" }} />
              </div>
              <div className="mtext">
                <h4>{w}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="range"></div>
    </>
  );
};

export default Part;
