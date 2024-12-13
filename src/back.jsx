import { useRef, useState } from 'react'
import img4 from '../src/assets/img4.jpg'


function Back() {

const [img,setimg]=useState(img4)
 

  return(
    <>
    <div>
    
    <img src={img} alt="" className='back'/>
   {/* <button >click</button> */}
    </div>
    </>
  )
}
export default Back;