import React from "react";
import btmdet from "../images/btmdet.png"
import "../styles/bottomdetails.css"
const BottomDetails = () => {
  return (
    <div className="bottom-details-outer">
      <div className="bottom-details-inner">
        <div className="bd-l">
            <img src={btmdet}/>
        </div>
        <div className="bd-r">
          <div className="bd-r-text">
              <span className="spul-s">Maximize </span>productivity and
              prioritize <span className="spul-s">mental wellness </span>with
              our website version. Seamlessly blending mindfulness and
              <span className="spul-s"> task management </span>, our platform
              offers a comprehensive solution for your daily challenges.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomDetails;
