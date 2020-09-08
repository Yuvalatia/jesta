import React, { useState } from "react";
import FontAwesome from "react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import no_image from "../../Assets/Images/no_image.png";

import "./JobAccordion.css";
const JobAccordion = (props) => {
  const [isOpen, setIsOpen] = useState(props.isOpen);
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const OnJobToggle = () => {
    setIsOpen(true);
  };

  const jobEventClick = async () => {
    setIsLoading(true);
    try {
      let results = await props.sendApplication(props.id);
      if (results) {
        setIsSent(true);
      }
    } catch (err) {
      console.log(err);
    }

    setIsLoading(false);
  };

  return (
    <Card>
      <Accordion.Toggle
        onClick={OnJobToggle}
        className="jonaccordion__title__container"
        as={Card.Header}
        eventKey={props.id}>
        <div className="jonaccordion__title__container__inner">
          <div>{props.date}</div>
          <div>{props.description}</div>
        </div>
        <div className="jonaccordion__title__container__opneicon">
          <FontAwesome name={`${isOpen ? "check-circle" : "circle"}`} />
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={props.id}>
        <Card.Body className="jonaccordion__body__container">
          <div className="jonaccordion__body__details">
            <div className="jonaccordion__body__details__col">
              <div>
                <p className="details__title">מספר עבודה</p>
                <p className="details__content">#{props.id}447283748</p>
              </div>
              <div>
                {props.isAssinged ? (
                  <p className="alreayAssig_text">הינך רשום לעבודה זאת</p>
                ) : isLoading ? (
                  <Spinner animation="border" variant="dark" />
                ) : isSent ? (
                  <p>מועמדות נשלחה</p>
                ) : (
                  <Button variant="success" onClick={() => jobEventClick()}>
                    שלח מועמדות
                  </Button>
                )}
              </div>
            </div>
            <div className="jonaccordion__body__details__col">
              <div>
                <p className="details__title">מיקום עבודה</p>
                <p className="details__content">{props.location}</p>
              </div>
              <div>
                <p className="details__title">תשלום</p>
                <p className="details__content">{props.payment}&#8362;</p>
              </div>
            </div>
          </div>
          <Image className="jonaccordion__body__img" src={no_image} thumbnail />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default JobAccordion;
