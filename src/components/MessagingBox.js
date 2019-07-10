import React from "react";

class MessagingBox extends React.Component {
  messageHandler(event) {
    // 13 is the keyCode of the Enterbutton
    if (event.keyCode === 13) {
      event.preventDefault();
      this.props.getMessage(event.target.value);
      event.target.value = "";
    }
  }

  render() {
    return (
      <div className="messagingBox">
        <textarea onKeyDown={event => this.messageHandler(event)} />
      </div>
    );
  }
}

export default MessagingBox;
