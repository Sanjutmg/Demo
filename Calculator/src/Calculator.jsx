import React, { useState } from 'react'

function Calculator() {
    const [result,setResult]=useState('');
    function clickHandle(e){
        setResult(result +e.target.innerHTML)

    }
    function equal(){
        setResult(eval(result))
    }
    function Ac(){
        setResult("")
    }
    function dell(){
        setResult(result.toString().slice(0,-1))
    }
  
  

  return (
    <div >
    <div className='header'>
    <div>
    <input type='text' value={result} className='txt' placeholder='0'  />
    
     </div>
    <div>
        <button onClick={clickHandle} className='btn'>1</button>
        <button onClick={clickHandle}  className='btn'>2</button>
        <button onClick={clickHandle}  className='btn'>3</button>
        <button onClick={clickHandle} className='btn'>4</button>
        <button onClick={clickHandle}  className='btn'>5</button>
        <button onClick={clickHandle}className='btn'>6</button>
        <button onClick={clickHandle} className='btn'>7</button>
        <button onClick={clickHandle}className='btn'>8</button>

        <button onClick={clickHandle} className='btn'>9</button>
        <button onClick={clickHandle} className='btn'>0</button>
        <button onClick={clickHandle} className='btn'>-</button>
        <button onClick={clickHandle} className='btn'>+</button>
        <button onClick={clickHandle} className='btn'>+</button>
        <button onClick={clickHandle} className='btn'>*</button>
        <button className='btn' onClick={equal}>=</button>
        <button className='btn' onClick={Ac}>AC</button>
        <button className='btn btn1' onClick={dell}>Del</button>
        

        




    </div>

    </div>


    </div>
  )
}

export default Calculator