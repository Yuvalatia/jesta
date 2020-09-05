import React, { useState } from "react";
import Error from "../Shared/Error";

const useErrorHandler = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("התחרשה שגיאה");

  const errorHide = () => {
    setError(false);
    setErrorMessage("התחרשה שגיאה");
  };

  return [
    error ? <Error onClose={errorHide} message={errorMessage} /> : null,
    (err) => {
      setError(true);
      setErrorMessage(err);
    }, // Show Error
    () => errorHide(), // Hide Error
  ];
};

export default useErrorHandler;
