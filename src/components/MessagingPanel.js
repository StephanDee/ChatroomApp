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

  getMessage(event) {
    console.log(event);
  }

  render() {
    return (
      <Fragment>
        <DisplayConversation />
        <MessagingBox getMessage={event => this.getMessage(event)} />
      </Fragment>
    );
  }
}

export default MessagingPanel;
