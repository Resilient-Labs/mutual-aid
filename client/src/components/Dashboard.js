import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import '../css/Dashboard.css';

function Dashboard() {
  let name = 'Marcos';
  let shmoney = 5;
  let shmoneydue = 3.5;
  let house = 'Gardner';
  let duedate = '01/31/2022';
  let shmoneydate = 'December';
  return (
    <Container>
      <Row>
        {/* ===== SIDEBAR ===== */}
        <Col md={3}>
          <Sidebar />
        </Col>
        {/* ===== MAIN CONTENT ===== */}
        <Col className="mx-3">
          {/* ===== WELCOME BOX ===== */}
          <Row className="mb-5">
            <div className="welcome-box justify-content-around align-items-center">
              <div class="welcome-box-left d-flex align-items-center">
                <img
                  className="profile-pic"
                  src="https://res.cloudinary.com/resilientcoders-org/image/upload/c_fit,h_300,w_255/dpr_2.0/v1638422713/marcos_kt52bi.png"
                ></img>
                <h1 className="my-1 text-white">Welcome back, {name}</h1>
              </div>
              <div>
                <h2 className="my-1 text-white"> Your Portfolio: ${shmoney}</h2>
              </div>
            </div>
          </Row>
          <div className="d-flex">
            {/* ===== LEFT COLUMN ===== */}
            <Col>
              <div className="fs-4 bg-light house-box">
                <p className="fw-bold">
                  Current House: <span className="fw-normal">{house}</span>
                </p>
                <p className="fw-bold">
                  Minimum amount due for {duedate}:{' '}
                  <span className="fw-normal">${shmoneydue}</span>
                </p>
                <p className="fw-bold">
                  Big schmoney month:{' '}
                  <span className="fw-normal">{shmoneydate}</span>
                </p>
              </div>
            </Col>
            {/* ===== RIGHT COLUMN ===== */}
            <Col>
              <div>
                <div className="bank-card">
                  <p>bank card image goes here</p>
                </div>
              </div>
            </Col>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
