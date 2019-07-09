import React from 'react';
import './App.css';
import Login from './components/Login'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      username: null
    };
  }

  async setUsername(username) {
    await this.setState({
      username: username
    });

   console.log(this.state.username);
  }

  render() {
    return (
      <div className="App">
        <Login setUsername={(event) => this.setUsername(event)}/>
      </div>
    );
  }
}

export default App;
