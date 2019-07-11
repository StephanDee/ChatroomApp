import React, { Fragment } from "react";
import { CardContent, Card } from "@material-ui/core";
import DisplayConversation from "../displayConversation/DisplayConversation";
import MessagingBox from "../MessagingBox";

class MessagingPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
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
        <Card className="card">
          <CardContent>
            <h1>Chat</h1>
            <DisplayConversation messages={this.state.messages} username={this.state.username}/>
            <MessagingBox getMessage={message => this.getMessage(message)} />
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

export default MessagingPanel;
