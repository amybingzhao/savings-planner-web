import React, { Component } from 'react';
import ButtonBar from '../button_bar';

class InfoTable extends Component {
  constructor(props) {
    super(props);
  }

  renderHeadings(headings) {
    const cells = headings.map(heading => {
      return <th>{heading}</th>
    });

    return <thead><tr>{cells}</tr></thead>
  }

  renderBody(info) {
    const rows = info.map(i => {
      return <tr><td>{i.name}</td><td>{i.amount}</td></tr>
    });

    return <tbody>{rows}</tbody>
  }

  render() {
    const myButtons = [{text: "+"}, {text: "-"}];
    const myHeadings = ["Name", "Amount"];
    const myInfo = [{name: "Amy", amount: "1000"}, {name: "Blurpy", amount: "2000"}];

    return (
      <div className="container">
        <div className="row">
          <ButtonBar buttons={myButtons} />
        </div>

        <div className="row">
          <table className="table table-striped">
            {this.renderHeadings(myHeadings)}
            {this.renderBody(myInfo)}
          </table>
        </div>
      </div>
    );
  }
}

export default InfoTable;
