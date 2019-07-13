import React from "react";
import "./DisplayConversation.css";

/**
 * @Author: Stephan Dünkel 
 * @Date: 2019-07-13 15:57:20 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-13 15:57:44
 *
 * The display conversation component.
 */
class DisplayConversation extends React.Component {
  render() {
    return (
      <div className="displayConversation">
        {this.props.messages.map((message, index) => (
          <div key={index} className={"margin-top-1 " + (message.username === this.props.username ? 'currentUser' : 'otherUsers')}>
            {message.username !== this.props.username && message.username !== "Admin" ? <div className="otherUsername">{message.username}</div> : ""}
            {message.message.split("%0A").map((text, index) => <div key={index}>{decodeURI(text) ? decodeURI(text) : <br />}</div>)}
          </div>
        ))}
      </div>
    );
  }
}

export default DisplayConversation;
