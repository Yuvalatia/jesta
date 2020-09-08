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

// Service
import { sentApplicationToJob } from "../../services/user.service";

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
        let allJobs = await response.json();

        if (userData.user) {
          // set Jobs that user already assign to them
          allJobs = allJobs.map((job) => {
            const isAssigened = job.intrestedUsers.some(
              (id) => id === userData.user._id
            );
            if (isAssigened) {
              job.isAssinged = true;
            } else {
              job.isAssinged = false;
            }
            return job;
          });
        }
        setJobs(allJobs);
        hideLoader();
      } catch (err) {
        console.log(err);
        showError("ישנה שגיאה, אנא חזור יותר מאוחר");
        hideLoader();
      }
    };
    fetchJobsFromServer();
  }, [userData]); // eslint-disable-line react-hooks/exhaustive-deps

  const sendApplicationToJob = async (jobId) => {
    if (!userData.token || !userData.user) {
      showError("יש להתחבר בכדי להגיש מועמדות לעבודה");
    }

    try {
      await sentApplicationToJob(userData.token, jobId);
      return true; // to small component to know it succsees
    } catch (err) {
      err.response
        ? showError(err.response.data.message)
        : showError("אנא נסה מאוחר יותר");
    }
    return false;
  };
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
              <JobsContainer
                data={jobs}
                sendApplication={sendApplicationToJob}
              />
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
