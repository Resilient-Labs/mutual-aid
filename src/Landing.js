import React, { Component } from "react";
import Placeholder from 'react-bootstrap/Placeholder';
import { Navbar, Container, Nav, Button, Card, Row, Col, Dropdown, Footer} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import './Landing.css';
import logo from './logo.png';
import placeholder from './social.png';


export default class Landing extends Component {
  render() {
    return (
     
      <div>
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Container>
            {/* <img
              src={logo}
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
            LOGO
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
                <Nav.Link href="#pricing">Lorem</Nav.Link>
                <Nav.Link href="#pricing">Lorem</Nav.Link>
              </Nav>
              <Nav>
                <Button variant="flat" size="md">Log In</Button>
                <Button variant="flat2" size="md">Apply</Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Placeholder as="p" animation="glow">
        <Placeholder xs={12} componentClass="textarea" style={{ height: 500 }} />
        </Placeholder>

        {/* MOTTO, DESCRIPTION OF MUTUAL BANK AID AND FREQUENTLY ASKED QUESTIONS */}
        <Container>
          <Row>
            <Col xs={12} md={8}>
              <Card className="mt-5">
                <Card.Body>
                  <Card.Title style={{fontSize: 40}}>Your roadmap to financial freedom</Card.Title>
                  <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</Card.Text>

                  <Accordion className="mt-5">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>What is Mutual Bank Aid?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Is Mutual Bank Aid safe to use?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                    
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Why choose Mutual Bank Aid over others?</Accordion.Header>
                      <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              </Card>
            </Col>

            {/* CUSTOMER'S REVIEW */}
            <Col xs={6} md={4}>
              <Card className="mt-5">
                <Card.Img variant="top" src={placeholder} height="300" />
                <Card.Body>
                  <Card.Title>Customer's Story</Card.Title>
                  <Card.Text>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      <footer className="footer">
        <Nav className="justify-content-center">
                  <Nav.Link  href="#app">Mobile App</Nav.Link>
                  <Nav.Link href="#community">Community</Nav.Link>
                  <Nav.Link href="#company">Company</Nav.Link>
                  <Nav.Link href="#help">Help</Nav.Link>
                  <Nav.Link href="#resources">Resources</Nav.Link>
                </Nav>
              <hr></hr>
            
      </footer>
      
      
      </div>
    );
  }
}

/*
Header: Logo, Navbar: About, Contact, Sign/Log Up 
Body: 3 Sections
Section 1: Image 
Section 2: Drop down buttons with Lorem 
Section 3: Members Review 
Footer
*/