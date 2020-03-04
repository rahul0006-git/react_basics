import React,{Component} from 'react';
import Aux from '../../../hoc/Auxiliary'

class Person extends Component{
    render(){
        return(
            <Aux>
            <p> I'm {this.props.name}</p>
            <p onClick = {this.props.click}> I'm of {this.props.age} years age. Hobbies?? {this.props.children} </p>
            <input type ='text' onChange = {this.props.changed} value = {this.props.name}></input>
            </Aux>
            
        );
    }
    
}

export default Person;