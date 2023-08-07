import logo from './logo.svg';
import './App.css';


import { Button, Checkbox, Form,Radio,TextArea  } from 'semantic-ui-react'
import  React,{ useState } from 'react';

function App() {


  const [inputList,setinputList] = useState([{first:""}]);
  
const remove=(index)=>{
  const list =[...inputList]
  list.slice(index,1);
  setinputList(list);
};

  const add=()=> {
  setinputList([...inputList, {first:""}]);

  }

  return (
  <>
  {
    inputList.map((x,index)=>(<div className='first'> 
  <div className='minus'>
    {inputList.length> 1 &&( 
    <button id='minus' onClick={()=>remove(index)}>-</button>
    )}
    </div>
    
  <Form className='insideForm'>
    <Form.Field className='lab'>
      <label>Question</label>
      <input name='input1' placeholder='Input Text'  />
    </Form.Field>
    <Form.Field className='lab2'>
     <label></label>
      <TextArea  name='input2' placeholder='Input Text' />
    </Form.Field>
    <div className='slide'>
    
      <p  name='input3' className='act'> Active <span><Radio toggle  /></span>  </p>
    
    </div>
  </Form>
  
  <div className='plus'>
    <button name='input4' id='plus' onClick={add} >+</button>
    </div>
  <div className='outbutton'>
    <Button name='input5' primary>Save</Button>
    <Button name='input6'   danger className='can'  >Cancle</Button>
  </div>
  
  </div>

)
)}
  
  
  </>
  )
    }
export default App
