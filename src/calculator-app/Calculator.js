import React from 'react'
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from 'react';
import '../calculator-app/calculator.css';
import {InputText} from 'primereact/inputtext'
const Calculator = () => {
    const [question, setquestion] = useState('');
   const [answer, setanswer] = useState('');
  return (
    <div className='container background'>
        <div className='card'>
            <div className='card-text' style={{backgroundColor:'lightblue',margin:'10px'}}>
                <h1 style={{textAlign:'center'}}>Calculator-App</h1>
            </div>
        </div>
        <div className='card card2'>
            <div className='calinput' style={{marginLeft:'10px'}}>
                <InputText style={{height:'36px',width:'80%',marginLeft:'10%',borderRadius:'10px'}}></InputText>
        </div>
        {/* <div className='row'> */}
            <div className='btn'>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>1</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>2</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>3</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>4</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>5</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>6</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>7</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>8</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>9</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>0</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>Clear</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>C</Button>
            <Button className='button' style={{backgroundColor:'lightgreen'}}>.</Button>
             <Button className='button' style={{backgroundColor:'lightblue'}}>+</Button>
             <Button  className='button' style={{backgroundColor:'lightblue'}}>-</Button>
             <Button  className='button' style={{backgroundColor:'lightblue'}}>*</Button>
             <Button  className='button' style={{backgroundColor:'lightblue'}}>÷</Button>
             <Button  className='button' style={{backgroundColor:'lightblue'}}>%</Button>
             <Button  className='button' style={{backgroundColor:'lightblue'}}>=</Button>
            </div>
        </div>
        
        {/* </div> */}
    </div>
  )
}

export default Calculator;