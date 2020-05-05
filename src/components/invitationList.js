import React, { Component } from 'react';
import weddingData from '../data/weddingInvitation.json';
import './invitationList.css';

class invitationList extends Component {
  renderTableHeader() {
    let header = Object.keys(weddingData[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  renderTableData() {
    return (
      weddingData.map((weddingInvitationDetail, index) => {
        const { id, name, RSVP, plusOne } = weddingInvitationDetail 
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{RSVP}</td>
            <td>{plusOne}</td>
          </tr>
        )
      })
    )
  }
  render() {
    return (
      <React.Fragment>
        <h1 className='title'>Invitation List Table</h1>
        <table className='invitation'>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
     </React.Fragment>
    )
  }
}
export default invitationList;