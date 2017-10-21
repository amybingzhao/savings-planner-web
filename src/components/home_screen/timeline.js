import React, { Component } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';

const VALUES = ['2017-09-09', '2017-09-10', '2017-11-10'];

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 1, previous: 0 };
  }

  render() {
    return (
      <div>
        <div className='home-screen-timeline-wrapper'>
        <HorizontalTimeline
          index={this.state.value}
          indexClick={(index) => {
            this.setState({ value: index, previous: this.state.value });
          }}
          values={ VALUES } />
          </div>
        <div className='text-center'>
          {/* any arbitrary component can go here */}
          {this.state.value}
        </div>
      </div>
    );
  }

}

export default Timeline;
