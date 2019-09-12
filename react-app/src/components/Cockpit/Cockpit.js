import React, { useEffect } from "react";
import classes from './Cockpit.css';

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        
    });

    const assignedClasses = []; 
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2) {
      assignedClasses.push( classes.red ); // ['red']
    }
    if ( props.persons.length <= 1) {
      assignedClasses.push( classes.bold ); // ['red', 'bold']
    }


    return (
        <div className={classes.Cockpit}>
            <h1>React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                onClick={props.clicked}
                className={btnClass} >
            Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;