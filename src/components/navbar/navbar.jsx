import React from 'react';
import './navbar.css';

const Navbar = (props) => {
  return (
    <ul className="navbar">
      <li>
        <div><i className="fas fa-globe"></i></div>
        <span>Overview</span>
      </li>
      <li>
        <div><i className="fas fa-chart-line"></i></div>
        <span>Plan</span>
      </li>
      <li>
        <div><i className="fas fa-users"></i></div>
        <span>Employees</span>
      </li>
      <li>
        <div><i className="fas fa-shield-alt"></i></div>
        <span>Compliance</span>
      </li>
      <li>
        <div><i className="fas fa-calendar-alt"></i></div>
        <span>Calendar</span>
      </li>
      <li>
        <div><i className="fas fa-copy"></i></div>
        <span>Reports</span>
      </li>
      <li>
        <div><i className="far fa-lightbulb"></i></div>
        <span>Resources</span>
      </li>
      <li>
        <div><i className="fas fa-heartbeat"></i></div>
        <span>Plan Health</span>
      </li>
    </ul>
  );
};

export default Navbar;
