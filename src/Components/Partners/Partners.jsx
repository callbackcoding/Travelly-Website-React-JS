import React from "react";
import p1 from "../../assets/c1.png";
import p2 from "../../assets/c2.png";
import p3 from "../../assets/c3.png";
import p4 from "../../assets/c4.png";
import p5 from "../../assets/c5.png";
import "./Partners.css";
const Partners = () => {
  return (
    <div className="partners_main">
      <div>
        <img src={p1} alt="" className="partners_img" />
      </div>
      <div>
        <img src={p2} alt="" className="partners_img" />
      </div>
      <div>
        <img src={p3} alt="" className="partners_img" />
      </div>
      <div>
        <img src={p4} alt="" className="partners_img" />
      </div>
      <div>
        <img src={p5} alt="" className="partners_img" />
      </div>
    </div>
  );
};

export default Partners;
