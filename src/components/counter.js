import React, { useState } from 'react'
import './counter_css.css'

function Counter() {
const [counter, setCounter] = useState(0)
const [isOpen, setisOpen] = useState(false)

    return (
        <>
        {isOpen ? (<div>
            <div className='container'>
            <button onClick={()=>setCounter(counter+1)} className='Mybutton'>+</button>
            <h3> {counter} </h3>
            <button onClick={()=>{if(counter>0) setCounter(counter-1)}} className='Mybutton'>-</button>
            </div>
            <button onClick={()=>setCounter(0)} className='Mybutton'>Reset</button>
            <button className='Mybutton' onClick={()=>setisOpen(false)} >Close Counter</button>
        </div>):(
            <button onClick={()=>setisOpen(true)} >Open Counter</button>
        )}
        </>
    )
}

export default Counter
