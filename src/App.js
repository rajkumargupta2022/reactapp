
import './App.css';
import Child from './Child';
import React,{createContext, useState}  from  'react'

export const globalInfo = createContext();

function App() {
const [color,setColor] = useState("green")
const [day, setDay] = useState('Monday')
const getDay = (item) =>{
  setDay(item)
}

  return (
    <globalInfo.Provider value={{appColor:color,getDay:getDay}}>
    <div className="App">
      <h1>app component {day}</h1>
      <Child />
    </div>
    </globalInfo.Provider>
  );
}

export default App;
