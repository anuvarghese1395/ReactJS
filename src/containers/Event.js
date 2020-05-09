import React from "react";
import axios from "axios";

import AddEvent from "../components/addEvent";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: "" };
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

  render() {
    return (
      <div>
        Event
        <AddEvent
          name={this.state.name}
          description={this.state.description}
          onChange={this.handleEventChange}
          onSave={this.handleEventSave}
        />
      </div>
    );
  }
}

export default Event;
