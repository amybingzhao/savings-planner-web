import React, { Component } from 'react';
import Greeting from '../greeting';
import InfoTable from './info_table';

class ItemsAndIncomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Greeting text="Here's your current info:" />
        <div className="container">
          <div className="col-md-6">
            <InfoTable />
          </div>
          <div className="col-md-6">
            <InfoTable />
          </div>
        </div>
      </div>
    )
  }
}

export default ItemsAndIncomeScreen;
