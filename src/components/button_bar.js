import React from 'react';

const ButtonBar = ({buttons}) => {
  const buttonBarItems = buttons.map((button) => {
    return (
      <button type="button" className="btn btn-secondary">{button.text}</button>
    )
  });

  return (
    <div className="btn-group pull-right">
      {buttonBarItems}
    </div>
  )
};

export default ButtonBar;
