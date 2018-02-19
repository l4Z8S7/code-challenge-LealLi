import React from 'react';
import './summary.css';

export default (props) => {
  return (
    <div className="summary">
        <p className="title">Plan Details <span><i className="fas fa-info-circle"></i></span></p>
        <p className="date">As of 8/31/2017</p>
        <div className="body">
          <p><i className="fas fa-heartbeat"></i> <span>Fair</span></p>
          <div className="grad">
            <div className="indicator"></div>
          </div>
          <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed iaculis dolor. Ut eget dui id ligula cursus mollis. Integer et magna rhoncus urna pellentesque tincidunt sed ut felis.</p>
        </div>
        <button>VIEW MORE</button>
    </div>
  );
}