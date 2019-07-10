import React, { Fragment } from "react";
import DisplayConversation from "./DisplayConversation";
import MessagingBox from "./MessagingBox";

class MessagingPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  connection = new WebSocket("ws://localhost:8080/");

  componentDidMount() {
    this.connection.onmessage = message => {
      const data = JSON.parse(message.data);
      this.setState({ messages: [...this.state.messages, data] });
    };
  }

  getMessage(message) {
    const data = {
      username: this.props.username,
      message: message
    };
    this.connection.send(JSON.stringify(data));
  }

  render() {
    return (
      <Fragment>
        <DisplayConversation messages={this.state.messages} />
        <MessagingBox getMessage={message => this.getMessage(message)} />
      </Fragment>
    );
  }
}

export default MessagingPanel;
