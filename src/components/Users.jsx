import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Users = () =>{

    const [age, setAge] = useState(18); 
    const [name, setName] = useState(null); 
    const [list, setList] = useState([])


    useEffect(()=>{
        axios.get(`http://localhost:9000/user`).then((response)=>{
            setList(response.data);
        }).catch(error => {
            console.log(error)
          });
    },[])

    const List = list.map((item, idx) => {
        return <Card key={idx} name={item.name} age={item.age} />
    });
    
   const addListHandler = () =>{
    setList( (prevState)=>([
        ...prevState,
        {name:name, age:age}
    ]))
   }

    return (
        <div  style={{margin:"50px",padding:'20px'}}>  
            <input type="text" placeholder='Enter Name' name="name" onChange={(event)=>{setName(event.target.value)}}/>                    
            <input type="number"  name="age" placeholder='Enter Age' onChange={(event)=>{setAge(event.target.value)}}/>  
            <br/>
            <button onClick={addListHandler} >Add user to list</button>                              
            {List}  
        </div>
    )
}

export default Users;
