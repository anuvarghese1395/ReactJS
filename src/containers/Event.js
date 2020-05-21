import React from "react";
import axios from "axios";
import {Switch, Route,Link } from "react-router-dom";

import AddEvent from "../components/addEvent";
import ListEvent from "../components/eventListData";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = { event: {}, eventData: [] };
  }

  handleEventChange = (key, value) => {
    this.setState({
      event: { ...this.state.event, [key]: value },
    });
  };
  componentDidMount = () => {
    this.loadAndShowEventList();
  };

  handleEventSave = () => {
    axios
      .post("http://localhost:5000/api/event", {
        ...this.state.event,
      })
      .then(() => {
        console.log("Success");
        this.setState({ event: {} });
      })
      .catch((e) => console.log("Error on save", e));
  };

  loadAndShowEventList = () => {
    axios.get("http://localhost:5000/api/event").then((res) => {
      const eventData = res.data;
      this.setState({ eventData });
    });
  };

  loadEvent = (id) => {
    axios.get(`http://localhost:5000/api/event/${id}`).then((res) => {
      const event = res.data;
      this.setState({ event });
    });
  };

  render() {
    return (
      <div>
        <Link
          onClick={() => {
            this.setState({ event: {} });
          }}
          to="/event"
        >
          AddEvent
        </Link>
        <br />
        <Link onClick={this.loadAndShowEventList} to="/events">
          ListEvent
        </Link>

        <div className="App">
          <Switch>
            <Route
              path="/event/:id?"
              children={({ match }) => (
                <AddEvent
                  event={this.state.event}
                  onChange={this.handleEventChange}
                  onSave={this.handleEventSave}
                  id={match.params.id}
                  loadEvent={this.loadEvent}
                />
              )}
            ></Route>

            <Route path="/events">
              <ListEvent eventData={this.state.eventData} />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Event;
