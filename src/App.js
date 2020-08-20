import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Radium from 'radium'
import Person from './Person/Person';
//import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component{
  
  state = {
    persons : [
      {id:'1', name:'Jen',age:30},
      {id:'2', name:'Jhazz',age:3},
      {id:'3', name:'Jamica', age:9}
    ],
    otherSate:'some other value',
    showPersons:false
  };

  /*  switchNameHandler = (newName) => { 
    //DOnt do this 
    //this.state.persons[0].name = 'Jenny';
  
    //Mutate it instead, allows us to update the object
    this.setState({
      persons:
      [
        {name:newName,age:31},
        {name:'Jhazz Rhylie',age:3},
        {name:'Jamica Kate', age:9}
        
      ]
     });
    }; */
    deletePersonsHandler = (personIndex) => {
      // Doesnt have copy and its not safe
     // const persons = this.state.persons
     
     //to securely have a copy of array
     // const persons = this.state.persons.slice();
     
     //more modern way  using spread array
      const persons = [...this.state.persons];
      persons.splice(personIndex,1);
      this.setState({persons:persons});
    };

     nameChangeHandler = (event, id)=>{
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      const person = {
        ...this.state.persons[personIndex]
      }
      person.name = event.target.value;
      const persons = [... this.state.persons];
      persons[personIndex] = person;
      this.setState({persons:persons });
    }
    togglePersonsHandler = () => {
       const doesShow = this.state.showPersons;
       this.setState({showPersons:!doesShow});
    };

    //Using react, short method
    render(){
      const style = {
        /* backgroundColor:'green',
        font:'inherit',
        border:'1px solid blue',
        padding:'8px',
        cursor:'pointer' */
      };

     let personsWithConditions = null;
     let btnClass=null;


     if(this.state.showPersons){
       personsWithConditions= (
       <div>
       {/*   ES6 Javascript */}
         {
         this.state.persons.map((person,index) => {
          return <Person
            click = {this.deletePersonsHandler.bind(this,index)}
            name={person.name}
            age= {person.age} 
            key={person.id}
            changed={(event) => this.nameChangeHandler(event,person.id)}/>
        
              //Key should be move to parent div like error boundary
           /*  return <ErrorBoundary key={person.id}>
                      <Person
                      click = {this.deletePersonsHandler.bind(this,index)}
                      name={person.name}
                      age= {person.age} 
                      changed={(event) => this.nameChangeHandler(event,person.id)}/>
                 </ErrorBoundary>  */
         })}
      </div>);
        style.backgroundColor = 'red';
     }
     btnClass="red";

     let classes = [];
     if(this.state.persons.length <=2){
       classes.push('red')
     }
     if(this.state.persons.length <=1){
      classes.push('bold')
    }

      return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
         {/*  <button 
          style={style}
          onClick={this.switchNameHandler.bind(this,'Jenny')}>Switch Name</button> */}

          <button className={btnClass}
          style={style}
          onClick={this.togglePersonsHandler}>Show Persons</button>
          {/*  It can be  inEfficient but can easily pass data without using the bind,
          but use the bind syntax if you can
          <button onClick={()=> this.switchNameHandler('Jenn')}></button> */}
          {personsWithConditions}
        </div>
        
      );
        //Long Method
    /* return React.createElement(
      'div',{className:'App'},
      React.createElement('h1', null,'Does this work now?')) */
    }
}

  
export default App;

