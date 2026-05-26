import React, { useState } from "react";

function studentreg() {
    const[Data,setdata]=useState({name:"",tel:"",Email:""})
    return (
           <div>
        <h1>studentregistration</h1>
        <form>
            <label htmlFor="name">name</label>
            <input type="text" id="name" name="name" required value={Data.name}/>

            <label htmlFor="name">mobile</label>
             <input type="text" id="name" name="tel" required value={Data.tel}/>
             
            <label htmlFor="name">Email</label>
             <input type="text" id="name" name="Email" required value={Data.Email}/>
        </form>
        </div>
    )
   
}

