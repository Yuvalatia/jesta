import React from "react";
import useErrorHandler from "../../hooks/error-handler";

import "./About.css";
const About = (props) => {
  const [error, showError] = useErrorHandler();
  return (
    <div className="about__container">
      {error}
      im About
      <button onClick={() => showError("דניאל שר")}>df</button>
      <p>cv{process.env.REACT_APP_BACKEND_URL}</p>
    </div>
  );
};

export default About;
