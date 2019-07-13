import React, { Fragment } from "react";
import { CardContent, Card } from "@material-ui/core";
import DisplayConversation from "../displayConversation/DisplayConversation";
import MessagingBox from "../MessagingBox";

/**
 * @Author: Stephan Dünkel
 * @Date: 2019-07-13 15:53:49
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-13 16:02:52
 *
 * The messaging panel component.
 */
class MessagingPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username,
      messages: []
    };
  }

  // Connection with the WebSocketServer
  connection = new WebSocket("ws://localhost:8080/");

  /**
   * Initialize View.
   */
  componentDidMount() {
    // Observe connection
    this.connection.onmessage = message => {
      try {
        const data = JSON.parse(message.data);
        this.setState({ messages: [...this.state.messages, data] });
      } catch (error) {
        console.log(error);
      }
    };
  }

  /**
   * Get Message and send data to the WebSocketServer.
   *
   * @param message The message
   */
  getMessage(message) {
    const data = {
      username: this.props.username,
      message: encodeURI(message)
    };

    try {
      this.connection.send(JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Fragment>
        <Card className="card">
          <CardContent>
            <h1>Chat</h1>
            <DisplayConversation
              messages={this.state.messages}
              username={this.state.username}
            />
            <MessagingBox getMessage={message => this.getMessage(message)} />
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}

export default MessagingPanel;
