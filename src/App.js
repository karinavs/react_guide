import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Lola', age: 33},
      { name: 'Bebe', age:26 }
    ],
    otherState: 'some other value'
  };
  
  switchNameHandler = () => {
    // console.log ('was clicked!');
    this.setState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Lola', age: 33},
        { name: 'Bebe', age:100 }
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies: Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  // return React.createElement('div', null, React.createElement 'h1', 'Hi, I\'m a React App!!!')
  }
}

export default App;
