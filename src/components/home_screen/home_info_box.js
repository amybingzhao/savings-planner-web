import React from 'react';

const HomeInfoBox = ({title, value}) => {
  return (
    <div className="home-info-box">
      <p className="home-info-box-title">
        {title}
      </p>
      <p className="home-info-box-value">
        {value}
      </p>
    </div>
  );
};

export default HomeInfoBox;
