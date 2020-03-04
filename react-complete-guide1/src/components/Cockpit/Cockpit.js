import React,{useEffect} from 'react';
 
const cockpit = (props) => {

  useEffect(() => {
      console.log('Cockpit called useEffect')
      // for HTTP Request

      setTimeout(()=>{
          alert('saved data to the cloud')
      },1000)

     return ()=>{
         console.log('now useeffect function has clean up function in it')
     }


  },[]);



    return (
        <div>
        <h1> {props.title}</h1>
        
        <button onClick = {props.clicked}> Switch Name</button>
        </div>
        
    );
}
export default React.memo(cockpit);