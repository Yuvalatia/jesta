import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import './JobAccordion.css';
const JobAccordion = (props) => {
    return(
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
                שלום זה כאן האדר
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    זה הבודי
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default JobAccordion;