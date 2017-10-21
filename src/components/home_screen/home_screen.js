import React, { Component } from 'react';
import Greeting from '../greeting';
import HomeInfo from './home_info';
import Timeline from './timeline';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Greeting
          text="Hey there!"
        />
        <HomeInfo/>
        <Timeline/>
      </div>
    )
  }

}
