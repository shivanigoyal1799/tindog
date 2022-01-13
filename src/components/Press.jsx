import React from "react";
import "../assets/Press.css";
import TECH_CRUNCH from "../assets/TechCrunch.png";
import TNW from "../assets/tnw.png";
import BIZZINSIDER from "../assets/bizinsider.png";
import MASHABLE from "../assets/mashable.png";

const Press = (props) => {
  return (
      <div className="press">

          <img className="press-logo" src={TECH_CRUNCH} alt="tc-logo"/>
          <img className="press-logo" src={TNW} alt="tnw-logo"/>
          <img className="press-logo" src={BIZZINSIDER} alt="biz-insider-logo"/>
          <img className="press-logo" src={MASHABLE} alt="mashable-logo"/>


      </div>


  );
}

export default Press;