
import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Back from './back'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './home'



function App() {
  const [post, setpost] = useState("features")
  const [count,setcount]= useState(0)
//   const plus=()=>{
//     // console.log(setcount(count=>(count+1
      
    
//   }
  
  return (
    <>
      <div> 
    <Back></Back>
        {/* <button onClick={plus}>this {setcount}</button> */}
        <Navbar post={post} setpost={setpost} ></Navbar>
       <Home></Home>

      </div>
    </>
  )
}

export default App
