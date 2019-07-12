import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

/*
 * @Author: Stephan Dünkel 
 * @Date: 2019-07-12 20:17:29 
 * @Last Modified by: Stephan Dünkel
 * @Last Modified time: 2019-07-12 20:28:11
 * 
 * The Login Component.
 */
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username
    };
  }

  /**
   * Handles the Inputs.
   *
   * @param event The event input object
   */
  inputHandler(event) {
    this.setState({ username: event.target.value });
  }

  /**
   * Sets the username on submit.
   *
   * @param username The username
   */
  onSubmitButtonClicked(username) {
    if (username && username !== "") {
      this.props.setUsername(username);
    } else {
      console.log("Bitte geben Sie einen Benutzernamen ein.");
    }
  }

  /**
   * Checks if the Enterbutton was clicked, if so then prevent from reload event.
   *
   * @param event The event input object
   */
  preventReload(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  }

  render() {
    return (
      <Card className="card">
        <CardContent>
          <h1>Chatroom beitreten</h1>
          <form>
            <TextField
              label="Name"
              id="username"
              onChange={event => this.inputHandler(event)}
              onKeyDown={event => this.preventReload(event)}
              placeholder="Max Mustermann"
              fullWidth
            />
          </form>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            size="small"
            disabled={!this.state.username}
            onClick={() => this.onSubmitButtonClicked(this.state.username)}
          >
            Einloggen
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Login;
