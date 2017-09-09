import React, { Component } from 'react';
import HomeInfoBox from './home_info_box';

class HomeInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <HomeInfoBox
              title="How much you should have:"
              value="0"
            />
          </div>
          <div className="col-md-4">
            <HomeInfoBox
              title="How much you should save per week:"
              value="1"
              />
          </div>
          <div className="col-md-4">
            <HomeInfoBox
              title="What % you should save per week:"
              value="2"
              />
          </div>
        </div>
      </div>
    )
  }

}

export default HomeInfo;
