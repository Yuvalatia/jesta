import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import './JobAccordion.css';
const JobAccordion = (props) => {
    return(
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey={props.id}>
                {props.location}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.id}>
                <Card.Body>
                    {props.desc}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default JobAccordion;