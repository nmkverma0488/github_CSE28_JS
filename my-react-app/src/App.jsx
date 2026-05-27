import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// import Student from './student'



function App() {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")

  function Show(){
    if(name===""|| email===""|| password===""){
      alert("please fill details")
    }
    else{
      alert("Register sucessful")
    }
  }
  {/*
  const [count, setCount] = useState(0)
   const increment=()=>{
    setCount(count+1)
   }
   const decrement=()=>{
    setCount(count-1)
   }
   const reset=()=>{
    setCount(0)
   }
    */}

  return (

    <>
    <h1>Registration Form</h1>
    <input type="text" placeholder="Enter Your Name" onChange={(e)=> setName(e.target.value)}/><br/>
    <input type="text" placeholder="Enter Your Email" onChange={(e)=> setEmail(e.target.value)}/><br/>
     <input type="text" placeholder="Enter Your Password" onChange={(e)=> setPassword(e.target.value)}/><br/>
     <button onClick={Show}>Submit</button>
     <h2>{name}</h2>
     <h2>{email}</h2>
     <h2>{password}</h2>
    {/*
    <h2>React Counter Application</h2>

    <h2>{count}</h2>
    <button onClick={increment}>Increment</button><br></br>
     <button onClick={decrement}>Decrement</button><br></br>
      <button onClick={reset}>Reset</button><br></br>
    
    <h2>Student Information</h2>
    <Student name="Raj" course="B.tech" marks="90"/>
    <Student name="Ram" course="M.tech" marks="95"/>
    <Student name="Rohan" course="MCA" marks="98"/>
    <Student/>*/}
    </>
  )
}

export default App