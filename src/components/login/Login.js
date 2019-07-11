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

  render() {
    return (
      <div className="login">
        <Card className="card">
          <CardContent>
            <h1>Chatroom App</h1>
            <form>
              <TextField
                label="Name"
                id="username"
                onChange={event => this.inputHandler(event)}
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
      </div>
    );
  }
}

export default Login;
