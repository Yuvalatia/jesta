import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import './Auth.css';

class Auth extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
          <div className='auth__container main_font'>
              <Row>
                  <Col md={6} xs={12}>
                  <Card>
                    <Card.Header as="h5">התחבר</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                  </Col>
                  <Col>
                    <Card md={6}  xs={12}>
                        <Card.Header as="h5">התחבר</Card.Header>
                        <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                  </Col>
              </Row>
             
          </div>
        );
      }
}

export default Auth;
