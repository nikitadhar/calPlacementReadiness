import React, { useState } from 'react'
import "./UI.css"
export default function UI() {
    const [user,setUser]=useState("");
function handleClick(e){ 
 setUser(user.concat(e.target.name))
} 
function calculate(){
    setUser(eval(user))
}
function clear(){
    setUser("")
}
function backSpace(){
    setUser(user.slice(0,-1))
}
return (
    <div id='container' >
        <div id='screen'>{user}</div>
        <div id='sub-container'>
      <button className="button" name='1'onClick={handleClick}>1</button>
      <button className="button" name='2' onClick={handleClick}>2</button>
      <button className="button" name='3' onClick={handleClick}>3</button>
      <button className="button" name='4' onClick={handleClick}>4</button>
      <button className="button" name='5' onClick={handleClick}>5</button>
      <button className="button" name='6' onClick={handleClick}>6</button>
      <button className="button" name='7' onClick={handleClick}>7</button>
      <button className="button" name='8' onClick={handleClick}>8</button>
      <button className="button" name='9' onClick={handleClick}>9</button>
      <button className="button" name='0' onClick={handleClick}>0</button>
      <button className="button" name='*' onClick={handleClick}>*</button>
      <button className="button" name='/' onClick={handleClick}>/</button>
      <button className="button" name='+' onClick={handleClick}>+</button>
      <button className="button" name='-' onClick={handleClick}>-</button>
      <button className="button" name='%' onClick={handleClick}>%</button>
      <button className='button' name='=' onClick={calculate}>=</button>
      <button className='clear' onClick={clear} >Clear</button>
      <button className='backSpace' onClick={backSpace}>C</button>
    </div>
    </div>
  )
}
