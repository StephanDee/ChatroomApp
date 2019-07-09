import React from "react";

class MessagingBox extends React.Component {
  constructor(props) {
    super(props);
  }

  messageHandler(event) {
    // 13 is the keyCode of the Enterbutton
    if (event.keyCode === 13) {
      event.preventDefault();
      console.log(event.target.value);
    }
  }

  render() {
    return (
      <div className="messagingBox">
        <p>MessagingBox</p>
        <textarea onKeyDown={event => this.messageHandler(event)} />
      </div>
    );
  }
}

export default MessagingBox;
