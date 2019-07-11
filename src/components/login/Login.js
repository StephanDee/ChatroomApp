import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.username
    };
  }

  inputHandler(event) {
    this.setState({ username: event.target.value });
  }

  onSubmitButtonClicked(username) {
    if (username && username !== "") {
      this.props.setUsername(username);
    } else {
      console.log("Bitte geben sie einen Benutzernamen ein.");
    }
  }

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
            sign in
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default Login;
