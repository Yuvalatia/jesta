import React from "react";
import Loading from "../Assets/Images/loading.gif";
import FontAwesome from "react-fontawesome";

import "./Error.css";
const Error = (props) => {
  return (
    <div className="error_container">
      <img alt="loading" src={Loading} />
      <p className="main_font loading_jesta_title">
        ג'סטה <FontAwesome name="suitcase" />
      </p>
    </div>
  );
};

export default Error;
