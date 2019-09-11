import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from "radium";
import Person from './Person/Person'

class App extends Component {

  state = {
    persons: [
      { id: 'dgdf', name: 'Max', age: 25 },
      { id: 'khjgjf', name: 'Manu', age: 26 },
      { id: 'y56yt', name: 'John', age: 27 },
    ],
    showPersons: false,
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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div className="">
          {this.state.persons.map( (person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              key={person.id}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div> 
      );
      btnClass = classes.Red;
    }

    const assignedClasses = []; 
    if ( this.state.persons.length <= 2) {
      assignedClasses.push( classes.red ); // ['red']
    }
    if ( this.state.persons.length <= 1) {
      assignedClasses.push( classes.bold ); // ['red', 'bold']
    }


    return (
      // <StyleRoot>
        <div className={classes.App}>
          <h1>React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            onClick={this.togglePersonsHandler}
            className={btnClass} >
            Toggle Persons
          </button>
          {persons}
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
