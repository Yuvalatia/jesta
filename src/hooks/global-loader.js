import React, { useState } from "react";
import GlobalLoading from "../Shared/GlobalLoading";

const useGlobalLoader = () => {
  const [loading, setLoading] = useState(false);
  return [
    loading ? <GlobalLoading /> : null,
    () => setLoading(true), // Show Loader
    () => setLoading(false), // Hide Loader
  ];
};

export default useGlobalLoader;
