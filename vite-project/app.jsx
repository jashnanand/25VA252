import './App.css';
import demo from './assets/component/demo';  
import props from './assets/component/props'; 
import { useState } from 'react';

function App() {
  const name= "Abes college";

  const students=[
    {name: "vikas", rollno: "123", course: "b.tech"},
    {name: "suresh", rollno: "124", course: "b.tech"},
    {name: "ramesh", rollno: "125", course: "b.tech"},
  ]

  return (
    <>
     <h1>Welcome to JS</h1>
     <h2>Hello {name}</h2>
     <demo/>
     <props name="vikas" rollno="123" course="b.tech"/>
     <exp7 students={students}/>
     <usestate/>
    </>
  )
}

export default App