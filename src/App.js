import React from "react";
import "./App.css";
import Login from "./components/Login";
import MessagingPanel from "./components/MessagingPanel";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  async setUsername(username) {
    await this.setState({
      username: username
    });

    console.log(this.state.username);
  }

  render() {
    return (
      <div className="App">
        {!this.state.username ? (
          <Login setUsername={event => this.setUsername(event)} />
        ) : (
          <MessagingPanel />
        )}
      </div>
    );
  }
}

export default App;
