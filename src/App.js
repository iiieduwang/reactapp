import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[]
    }
  }
  componentDidMount(){
    //ajax call
    this.getUsers();
  }
  getUsers(){
    fetch("/api/users")  //http://localhost:3000/api/users
      .then(res => res.json())
      .then(users => {
         //console.log(users)
        this.setState({ users:users})
      })

  }
  render() {
    return (
      <div className="App">
         <ul>
         {this.state.users.map(user=>
            <li key={user.id}>{user.name}</li>
          )}
         </ul>
      </div>
    );
  }
}

export default App;
