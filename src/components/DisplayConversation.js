import React from "react";

class DisplayConversation extends React.Component {
  render() {
    return (
      <div className="displayConversation">
        {this.props.messages.map((message, index) => (
          <div key={index}>
            {message.username}: {message.message}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayConversation;
