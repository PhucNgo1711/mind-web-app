import React, { Component } from 'react';
import './App.css';
import './ui-components/SideNav/SideNav'
import SideNav from './ui-components/SideNav/SideNav';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">{this.state.response}</p>
        <Button type="primary">Button</Button>
        <Icon type="step-forward" /> */}
        <SideNav></SideNav>
      </div>
    );
  }
}

export default App;
