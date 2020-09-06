import React, { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import FiltersContainer from "./FiltersContainer";
import JobsContainer from "./JobsContainer";
import Paging from "../../Shared/Paging";

// Context
import UserContext from "../../context/UserContext";
// Hooks
import useGlobalLoader from "../../hooks/global-loader";
import useErrorHandler from "../../hooks/error-handler";

import "./Jobs.css";
const Jobs = (props) => {
  const [jobs, setJobs] = useState([]);
  const { userData } = useContext(UserContext);
  const [loading, showLoader, hideLoader] = useGlobalLoader();
  const [error, showError] = useErrorHandler();

  useEffect(() => {
    const fetchJobsFromServer = async () => {
      showLoader();
      try {
        const response = await fetch(process.env.REACT_APP_BACKEND_URL_JOBS);
        const allJobs = await response.json();
        setJobs(allJobs);
        hideLoader();
      } catch (err) {
        showError(err.response.data.message);
        hideLoader();
      }
    };
    fetchJobsFromServer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      {error}
      {loading}

      <div className="jobs__container">
        <Container>
          <Row>
            <Col>
              <FiltersContainer />
            </Col>
          </Row>
          <Row className="jobs__results__container">
            <Col>
              <JobsContainer data={jobs} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Paging />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Jobs;
