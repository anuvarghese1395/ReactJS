import React, { Component } from "react";
// import axios from "axios";

import "./invitationList.css";
import { handleEventDisplay } from "./containers/Event";
import AddEvent from "../components/addEvent";


class invitationList extends Component {
  handleEventDisplay();
 
  renderTableHeader() {
    let header = Object.keys(this.props.list[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }
  renderTableData() {
    return this.props.list.map((eventData, index) => {
      const { id, name, RSVP, plusOne } = eventData;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{RSVP}</td>
          <td>{plusOne}</td>
        </tr>
      );
    });
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Invitation List Table</h1>
        <table className="invitation">
          <thead>
            <tr>{this.renderTableHeader()}</tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default invitationList;
