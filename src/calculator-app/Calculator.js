import React from 'react'
import { Button } from 'primereact/button';
import 'bootstrap/dist/css/bootstrap.css'; 
import { useState } from 'react';
import '../calculator-app/calculator.css';
import {InputText} from 'primereact/inputtext'
const Calculator = () => {
    const [question, setquestion] = useState('');
   const [answer, setanswer] = useState('');
   const updatevalue= (val)=>{
    switch(val){
        case 'clear':
        let ques=question;
        ques=ques.substring(0,ques,length-1);
        setquestion(ques);
        break;
       case 'delete':
        setquestion(""); 
        setanswer("");
        break;
        case '=':
         let data = question;
         let result = eval(data);
          setanswer(result);
          break;
          default:
          let val1 = question;
          setquestion(val1+data);
            
    }
   }
  return (
    <div className='container background'>
        <div className='card'>
            <div className='card-text' style={{backgroundColor:'lightblue',margin:'10px'}}>
                <h1 style={{textAlign:'center'}}>Calculator-App</h1>
            </div>
        </div>
        <div className='card card2'>
            <div className='calinput' style={{marginLeft:'10px'}}>
                <InputText val={question} style={{height:'36px',width:'80%',marginLeft:'10%',borderRadius:'10px'}}></InputText>
        </div>
        {/* <div className='row'> */}
            <div className='btn'>
            <Button className='button'  onclick={()=>{updatevalue('1')}}style={{backgroundColor:'lightgreen'}}>1</Button>
            <Button className='button'  onclick={()=>{updatevalue('2')}}style={{backgroundColor:'lightgreen'}}>2</Button>
            <Button className='button'  onclick={()=>{updatevalue('3')}}style={{backgroundColor:'lightgreen'}}>3</Button>
            <Button className='button'  onclick={()=>{updatevalue('4')}}style={{backgroundColor:'lightgreen'}}>4</Button>
            <Button className='button' onclick={()=>{updatevalue('5')}}style={{backgroundColor:'lightgreen'}}>5</Button>
            <Button className='button' onclick={()=>{updatevalue('6')}}style={{backgroundColor:'lightgreen'}}>6</Button>
            <Button className='button' onclick={()=>{updatevalue('7')}}style={{backgroundColor:'lightgreen'}}>7</Button>
            <Button className='button' onclick={()=>{updatevalue('8')}}style={{backgroundColor:'lightgreen'}}>8</Button>
            <Button className='button' onclick={()=>{updatevalue('9')}}style={{backgroundColor:'lightgreen'}}>9</Button>
            <Button className='button' onclick={()=>{updatevalue('0')}}style={{backgroundColor:'lightgreen'}}>0</Button>
            <Button className='button' onclick={()=>{updatevalue('clear')}}style={{backgroundColor:'lightgreen'}}>Clear</Button>
            <Button className='button' onclick={()=>{updatevalue('delete')}}style={{backgroundColor:'lightgreen'}}>delete</Button>
            <Button className='button' onclick={()=>{updatevalue('.')}}style={{backgroundColor:'lightgreen'}}>.</Button>
             <Button className='button' onclick={()=>{updatevalue('=')}}style={{backgroundColor:'lightblue'}}>=</Button>
             <Button  className='button' onclick={()=>{updatevalue('-')}}style={{backgroundColor:'lightblue'}}>-</Button>
             <Button  className='button'onclick={()=>{updatevalue('*')}} style={{backgroundColor:'lightblue'}}>*</Button>
             <Button  className='button' onclick={()=>{updatevalue('+')}}style={{backgroundColor:'lightblue'}}>÷</Button>
             <Button  className='button' onclick={()=>{updatevalue('%')}}    
                
        
                          style={{backgroundColor:'lightblue'}}>%</Button>
             <Button  className='button' onclick={()=>{updatevalue('=')}}style={{backgroundColor:'lightblue'}}>=</Button>
            </div>
        </div>
        
        {/* </div> */}
    </div>
  )
}

export default Calculator;