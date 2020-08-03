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
                    <div className='jonaccordion__body__details'>
                        <div className='jonaccordion__body__details__col'>
                            <div>
                                <p className='details__title'>מספר עבודה</p>
                                <p className='details__content'>#{props.id}447283748</p>
                            </div>
                            <div><input /></div>
                            
                        </div>
                        <div className='jonaccordion__body__details__col'>
                            <div>
                                <p className='details__title'>מיקום עבודה</p>
                                <p className='details__content'>{props.location}</p>
                            </div>
                            <div>
                                <p className='details__title'>תשלום</p>
                                <p className='details__content'>#{props.payment}</p>
                            </div>
                        </div>
                    </div>
                    <Image className='jonaccordion__body__img' src={no_image} thumbnail />
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default JobAccordion;