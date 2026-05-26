import React, { use, usestate } from 'react'

function Usestate() {
    const[color,setColor]=React.usestate('blue');
    
    const mouseover=()=>{
        setColor(color=='blue'?'red':'blue');
    }

    const[count,setcount]=usestate();

    const increment=()=>{
        setcount(count+1);
        }

     const decrement=()=>{
        setcount(count-1)
     }    

     const reset=()=>{
        setcount(0);
     }
  return (
    <>
    <h1>Usestate</h1>
    <p style={{color:color}} onMouseOver={mouseover}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti dolores officia dolore, fuga magni? Ducimus, consectetur. Dolorum, voluptatum nemo aspernatur exercitationem officiis suscipit ea corrupti reiciendis dolorem ducimus sunt?</p>
  
     <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
         <button onClick={decrement}>-</button>
          <button onClick={reset}>reset</button>
     </div>
    
    </>
  )
}