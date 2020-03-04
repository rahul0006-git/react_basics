import React,{Component} from 'react'
import Person from './Person/Person'

class Persons extends Component{

  // static getDerivedStateFromProps(props,state){
  // console.log('Persons.js called getDerivedStateFromProps');
  // return state;
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('Persons.js called shouldComponentUpdate');
    // if(nextProps.persons !== this.state.persons){
    //   return true;
    // }else{
    //   return false;
    // }
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('Persons.js called getSnapshotBeforeUpdate ');
    return {message : 'Snapshot'};
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('Persons.js called componentDidUpdate');
    console.log(snapshot);
  }


  render(){
    console.log('Persons.js is rendering..')
    return this.props.persons.map((person,index) =>{
      return(
        <Person name = {person.name} 
        age = {person.age}
        click = {()=>this.props.clicked(index)}
        key = {person.id}
        changed = {(event)=>this.props.changed(event,person.id)}/>
      );
    });
    
  }
  
        
}
export default Persons;