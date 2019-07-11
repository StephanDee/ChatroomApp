import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import MessagingPanel from "./components/MessagingPanel";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  setUsername(username) {
    this.setState({
      username: username
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.username ? (
          <Login setUsername={event => this.setUsername(event)} />
        ) : (
          <MessagingPanel username={this.state.username} />
        )}
      </div>
    );
  }
}

export default App;
