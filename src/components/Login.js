import React from 'react';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: this.props.username
        }
    }

    onSubmitButtonClicked(event) {
        event.preventDefault();
        this.props.setUsername(event.target.username.value);
    }

  render() {
    return (
      <div className="login">
          <form onSubmit={(event) => this.onSubmitButtonClicked(event)}>
              <label>Benutzername:</label><br />
              <input type="text" id="username"/><br />
              <input type="submit" value="Login"/>
          </form>
      </div>
    );
  }
}

export default Login;