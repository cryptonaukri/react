import React, {useState, useEffect } from 'react';
import Card from './Card';

const Users = () =>{

    const [age, setAge] = useState(18); 
    const [count, setCount] = useState(0); 
    
    const changeAgeHandler = () =>{
        setAge(age+1);
    }

    
    const changeVarHandler = () =>{
        setCount(20);
    }

    useEffect(()=>{
        //body
        console.log("HI.. useEffect");
    },[count]);

    return (
        <div className='App'  style={{margin:"40px",color:"blue" }}>
        
        <button onClick={changeAgeHandler} >Change Age by +1</button>
        <button onClick={changeVarHandler} >Change Var</button>
        
        <Card name="akshay" Age={age}>
            <h2>Hi There</h2> 
        </Card>
        <br/>
        <Card name="Anuj" Age="24"/>
        <br/>
        <Card name="Sham" Age="20"/>
    </div>
    )
}

export default Users;
