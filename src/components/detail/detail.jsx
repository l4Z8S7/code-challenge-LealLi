import React, { Component } from 'react';
import './detail.css';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      totalAccountBalance: '',
      planPerformance: '',
      loanBalance: '',
      forfeitureBalance: '',
      ebaBalance: ''
    };
    this.toggleBalance = this.toggleBalance.bind(this);
  }

  toggleBalance(props) {
    if (!this.state.checked) {
      this.setState({
        checked: !this.state.checked,
        totalAccountBalance: props.totalAccountBalance.toLocaleString().replace(/\d/g, 'X'),
        planPerformance: props.planPerformance.toLocaleString().replace(/\d/g, 'X'),
        loanBalance: props.loanBalance.toLocaleString().replace(/\d/g, 'X'),
        forfeitureBalance: props.forfeitureBalance.toLocaleString().replace(/\d/g, 'X'),
        ebaBalance: props.ebaBalance.toLocaleString().replace(/\d/g, 'X')
      });
    } else {
      this.setState({
        checked: !this.state.checked,
        totalAccountBalance: props.totalAccountBalance.toLocaleString(),
        planPerformance: props.planPerformance.toLocaleString(),
        loanBalance: props.loanBalance.toLocaleString(),
        forfeitureBalance: props.forfeitureBalance.toLocaleString(),
        ebaBalance: props.ebaBalance.toLocaleString()
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    this.toggleBalance(nextProps);
  }
  
  render() {
    return (
      <div className="detail">
        <div className="title">
          <p>Plan Details <span><i className="fas fa-info-circle"></i></span></p>
          <p>
            <input
              type="checkbox"
              value={this.state.checked}
              onChange={() => this.toggleBalance(this.props)}
            />
            <span style={{ fontSize: '12px', color: '#0000ff'}}>Reveal</span>
          </p>
        </div>
        <ul>
          <li>
            <span>Total Account Balance</span>
            <span>$ { this.state.totalAccountBalance } M <i className="fas fa-arrow-up" style={{ color: "green" }}></i></span>
          </li>
          <li>
            <span>Plan Performance</span>
            <span>{ this.state.planPerformance } % <i className="fas fa-arrow-up" style={{ color: "green" }}></i></span>
          </li>
          <li>
            <span>Loan Balance</span>
            <span>$ { this.state.loanBalance } <i className="fas fa-arrow-up" style={{ color: "green" }}></i></span>
          </li>
          <li>
            <span>Forfeiture Balance</span>
            <span>$ { this.state.forfeitureBalance } <i className="fas fa-arrow-down" style={{ color: "red" }}></i></span>
          </li>
          <li>
            <span>EBA Balance</span>
            <span>$ { this.state.ebaBalance } <i className="fas fa-arrow-down" style={{ color: "red" }}></i></span>
          </li>
        </ul>
        <button>VIEW DETAILS</button>
      </div>
    );
  }
}

export default Detail;
