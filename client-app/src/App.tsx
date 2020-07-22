import React, { Component } from 'react';
import './App.css';
import axois from 'axios'
import { Header, List } from 'semantic-ui-react'

class App extends Component {
  state = {
    values: []
  }

  componentDidMount() {
    axois.get('http://localhost:5000/api/values')
    .then((response)=> {
      this.setState({
        values: response.data
      })
    })
  } 

  render(){
  return (
    <div>
      <Header as='h2' icon='users' content='Simple Web App' />
      <List>
        {this.state.values.map((value:any)=> (
          <List.Item key={value.id}> {value.name}</List.Item>
        ))}
      </List>
      </div>
  );
  }
}

export default App;
