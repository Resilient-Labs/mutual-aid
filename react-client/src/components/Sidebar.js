import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar p-4 text-white">
      <p>LOGO</p>
      <nav className="d-flex flex-column">
        <a href="#">Profile</a>
        <a href="#">House</a>
        <Link to="/settings">Settings</Link>
      </nav>
      <Button className="btn btn-light btn-lg sign-out">Sign out</Button>
    </div>
  );
}

export default Sidebar;
