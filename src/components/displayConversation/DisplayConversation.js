import React from "react";
import "./DisplayConversation.css";

class DisplayConversation extends React.Component {
  render() {
    return (
      <div className="displayConversation">
        {this.props.messages.map((message, index) => (
          <div key={index} className={"margin-top-1 " + (message.username === this.props.username ? 'currentUser' : 'otherUsers')}>
            {message.username !== this.props.username && message.username !== "Admin" ? message.username + ": " : ""}
            {message.message}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayConversation;
