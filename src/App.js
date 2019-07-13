import React from "react";
import "./App.css";
import Login from "./components/login/Login";
import MessagingPanel from "./components/messagingPanel/MessagingPanel";

/**
 * @Author: Stephan Dünkel
 * @Date: 2019-07-13 15:46:29
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-13 15:53:38
 *
 * The app component representing the main component of the app.
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  /**
   * Sets the username.
   *
   * @param username the username
   */
  setUsername(username) {
    this.setState({
      username: username
    });
  }

  render() {
    return (
      <div className="padding-1">
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
