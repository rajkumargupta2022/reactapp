import React,{useContext} from 'react'
import { globalInfo } from './App'


const SuperChild = () => {
const {appColor,getDay} =useContext(globalInfo)
const day ="sinday"
console.log(appColor);                     

  return (
    <div>
        <h1 style={{color:appColor}}>Super component</h1>
        <button onClick={()=>getDay(day)}>click</button>
    </div>
  )
}

export default SuperChild