import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

/**
 * @Author: Stephan Dünkel 
 * @Date: 2019-07-13 15:50:48 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-13 15:53:11
 *
 * The messaging box component.
 */
class MessagingBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  /**
   * Handles the messages.
   *
   * @param event The input event
   */
  messageHandler(event) {
    this.setState({ message: event.target.value });
  }

  /**
   * Send the message.
   *
   * @param message The message
   */
  sendMessage(message) {
    if (message !== "") {
      this.props.getMessage(message);
      this.setState({ message: "" });
    } else {
      console.log("Es wurde keine Nachricht eingegeben.");
    }
  }

  render() {
    return (
      <div className="messagingBox margin-top-2">
        <TextField
          placeholder="Nachricht eingeben"
          variant="outlined"
          value={this.state.message}
          fullWidth
          multiline
          rows={4}
          rowsMax={4}
          onChange={event => this.messageHandler(event)}
        />
        <br /><br />
        <Button
          variant="contained"
          color="primary"
          size="small"
          disabled={!this.state.message}
          onClick={() => this.sendMessage(this.state.message)}
        >
          Senden
        </Button>
      </div>
    );
  }
}

export default MessagingBox;
