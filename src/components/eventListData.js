import React from "react";

function eventListData(props){
   return <div className="App">
    <div className="left">
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>description </th>
        </tr>
        {props.eventData.map((eventData) => {
          return (
            <tr>
              <td>{eventData._id}</td>
              <td>{eventData.name}</td>
              <td>{eventData.description}</td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  </div>
}
export default eventListData;