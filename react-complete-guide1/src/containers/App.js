import React, { Component } from 'react';
import classes from'./App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';

class App extends Component {

  state = {Person:
    [
      {
       name : 'lol',
       id : '1234',
       age : '23'},
       {
         name : 'smiley',
         id: '123456',
         age :'23'
       }
  ],
  showPersons : false
  }

  static getDerivedStateFromProps (props,state){
    
    console.log('[App.js] called getDerivedStateFromProps ');
    return state;
  }

  componentDidMount(){
    console.log('[App.js] called componentDidMount')
  }

  toggleHandler = () =>{
    const doesShow = this.state.showPersons;
     this.setState({showPersons: !doesShow
      });
  }

  deletePersonHandler = (personIndex)=>{
    //  const persons = this.state.Person.slice();
    const persons = [...this.state.Person];
     persons.splice(personIndex,1);
     this.setState({Person:persons});
  }

  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.Person.findIndex(p=>{
    return p.id ===id;
    });

    const person = {
      ...this.state.Person[personIndex]
    };
    person.name= event.target.value;
    const persons = [...this.state.Person]
    persons[personIndex] = person;

    this.setState({Person:persons});
    
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('App.js called shouldComponentUpdate')
    return true;
  }

  componentDidUpdate(){
    console.log('App.js called componentDidUpdate')
  }

  render() {
    console.log('[App.js] called render');

    let persons= null;
    if(this.state.showPersons){
      persons = (
       <div>

       <Persons
       persons = {this.state.Person}
       clicled = {this.deletePersonHandler}
       changed =  {this.nameChangeHandler}/>
       

       </div>
      ); 
    }
    return (
      <Aux className="App">
        <Cockpit
         title = {this.props.appTitle}
         persons = {this.state.Person} 
         clicked = {this.toggleHandler}/>
        {persons}
      </Aux>
    );
  }
}

export default withClass(App,classes.App);
