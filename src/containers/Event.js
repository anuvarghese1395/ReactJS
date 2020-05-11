import React from "react";
import axios from "axios";

import AddEvent from "../components/addEvent";
import EventListData from "../components/eventListData";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "", eventData: [], showList: false };
  }

  handleEventChange = (key, value) => {
    this.setState({ ...this.state, [key]: value });
  };

  handleEventSave = () => {
    axios
      .post("http://localhost:5000/api/event", {
        name: this.state.name,
        description: this.state.description,
      })
      .then(() => {
        console.log("Success");
        this.setState({ name: "", description: "" });
      })
      .catch((e) => console.log("Error on save", e));
  };
  loadAndShowEventList = () => {
    this.setState({showList:true})
    axios.get("http://localhost:5000/api/event").then((res) => {
      const eventData = res.data;
      console.log(eventData);
      this.setState({ eventData });
    });
  };

  render() {
    return (
      <div>
        <button onClick={()=>this.setState({showList:false})}>Add Event</button>
        <button onClick={this.loadAndShowEventList}>List Event</button>
        {!this.state.showList ? (
          <AddEvent
            name={this.state.name}
            description={this.state.description}
            onChange={this.handleEventChange}
            onSave={this.handleEventSave}
            displayData={this.loadEventList}
          />
        ) : (
          <EventListData eventData={this.state.eventData} />
        )}
      </div>
    );
  }
}

export default Event;
