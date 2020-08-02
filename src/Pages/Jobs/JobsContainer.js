import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import JobAccordion from './JobAccordion';

import './JobsContainer.css';
const JobsContainer = (props) => {
    return(
        <Accordion defaultActiveKey={props.data[0].id}>
            {props.data.map((job) => 
                <JobAccordion 
                    key={job.id} 
                    id={job.id} 
                    desc={job.description} 
                    location={job.location}  
                />
            )}
        </Accordion>
    );
}

export default JobsContainer;