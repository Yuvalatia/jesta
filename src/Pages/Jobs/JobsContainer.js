import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

import JobAccordion from './JobAccordion';

import './JobsContainer.css';
const JobsContainer = (props) => {
    return(
        <Accordion defaultActiveKey={props.data[0].id}>
            {props.data.map((job) => 
                <JobAccordion 
                    isOpen={props.data[0].id === job.id}
                    key={job.id} 
                    id={job.id} 
                    description={job.description} 
                    location={job.location}  
                    image={job.image}
                    date={job.date}
                    payment={job.payment}
                    ownerId={job.ownerId}
                />
            )}
        </Accordion>
    );
}

export default JobsContainer;