import React from "react";
import FontAwesome from "react-fontawesome";
import Alert from "react-bootstrap/Alert";

import "./Error.css";
const Error = (props) => {
  return (
    <div className="error_container">
      <Alert
        className="error_err"
        variant="danger"
        onClose={() => props.onClose()}
        dismissible>
        <Alert.Heading>
          !שגיאה <FontAwesome name="exclamation-triangle" />
        </Alert.Heading>
        <p>{props.message}</p>
      </Alert>
    </div>
  );
};

export default Error;
