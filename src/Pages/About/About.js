import React from "react";
import GlobalLoading from "../../Shared/GlobalLoading";

import "./About.css";
const About = (props) => {
  return (
    <div className="about__container">
      <GlobalLoading />
      im About
      <button onClick={() => console.log(process.env.REACT_APP_BACKEND_URL)}>
        df
      </button>
      <p>cv{process.env.REACT_APP_BACKEND_URL}</p>
    </div>
  );
};

export default About;
