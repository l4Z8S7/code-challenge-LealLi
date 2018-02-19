import React, { Component } from 'react';
import './App.css';
import Navbar from '../navbar/navbar';
import Header from '../header/header';
import Detail from '../detail/detail';
import Summary from '../summary/summary';
import PartiRate from '../parti-rate/parti-rate';
import DefRate from '../def-rate/def-rate';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balances: {
        totalAccountBalance: 0,
        planPerformance: 0,
        loanBalance: 0,
        forfeitureBalance: 0,
        ebaBalance: 0,
      },
      partiRate: [],
      defRate: []
    };
  }

  componentDidMount() {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {
      let { participationRate: partiRate, deferralRate: defRate, plan: { balances, performance } }= data;
      balances.totalAccountBalance = balances.totalAccountBalance / 1000000;
      balances.planPerformance = (performance['2017'].reduce((a, b) => a + b.value, 0) + performance['2018'].reduce((a, b) => a + b.value, 0)) / 0.12;
      this.setState({
        balances,
        partiRate,
        defRate
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <Header />
          <div className="content">
            <Detail {...this.state.balances} />
            <Summary />
            <PartiRate data={this.state.partiRate} />
            <DefRate data={this.state.defRate} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
