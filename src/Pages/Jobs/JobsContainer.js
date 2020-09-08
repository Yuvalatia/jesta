import React from "react";
import Accordion from "react-bootstrap/Accordion";

import JobAccordion from "./JobAccordion";

import "./JobsContainer.css";
const JobsContainer = (props) => {
  return (
    <Accordion defaultActiveKey={props.data[0] ? props.data[0]._id : null}>
      {props.data.map((job) => (
        <JobAccordion
          isOpen={props.data[0]._id === job._id}
          key={job._id}
          id={job._id}
          description={job.description}
          location={job.location}
          image={job.image}
          date={job.date}
          payment={job.payment}
          ownerId={job.ownerId}
          isAssinged={job.isAssinged}
          sendApplication={props.sendApplication}
        />
      ))}
    </Accordion>
  );
};

export default JobsContainer;
