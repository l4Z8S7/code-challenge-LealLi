import React from 'react';
import './header.css';

export default (props) => {
  return (
    <div className="header">
      <p className="title">Plan Health Report Overview <span>Beta</span></p>
      <div className="control">
        <span><i className="fas fa-list-ul"></i><sup>1</sup></span>
        <span><i className="fas fa-envelope"></i><sup>12</sup></span>
        <span className="drop-down">ABC USER <i className="fas fa-angle-down"></i></span>
        <a>Sign Out</a>
      </div>
    </div>
  );
}