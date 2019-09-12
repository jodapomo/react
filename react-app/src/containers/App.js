import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from "radium";
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');    
  }

  state = {
    persons: [
      { id: 'dgdf', name: 'Max', age: 25 },
      { id: 'khjgjf', name: 'Manu', age: 26 },
      { id: 'y56yt', name: 'John', age: 27 },
    ],
    showPersons: false,
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  render() {
    console.log('[App.js] render');  
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover' : {
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black',
    //   // }
    // }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div className="">
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div> 
      );
    }

    return (
      // <StyleRoot>
        <div className={classes.App}>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler} />
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
