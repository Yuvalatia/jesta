import React from 'react';
import FontAwesome from 'react-fontawesome';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

import no_image from '../../Assets/Images/no_image.png';

import './JobAccordion.css';
const JobAccordion = (props) => {
    return(
        <Card>
            <Accordion.Toggle className='jonaccordion__title__container' as={Card.Header} eventKey={props.id}>
                <div className='jonaccordion__title__container__inner'>
                    <div>{props.date}</div>
                    <div>{props.description}</div>
                </div>
                <div className='jonaccordion__title__container__opneicon'><FontAwesome name='caret-left' /></div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={props.id}>
                <Card.Body className='jonaccordion__body__container'>
                    <div>
                        
                    </div>
                    <Image src={no_image} width={150} thumbnail />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default JobAccordion;