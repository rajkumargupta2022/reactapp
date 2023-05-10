import React, { useContext, useRef } from 'react'
import { globalInfo } from './App'
import SuperChild from './SuperChild';


const Child = () => {
    const inputRef = useRef(null)
    const { appColor } = useContext(globalInfo)
    console.log(appColor);
    const handle = () => {
        inputRef.current.value="100"
    }

    return (
        <div>
            <h1 style={{ color: appColor }}>Child component</h1>
            <SuperChild />
            <input type="text" ref={inputRef}/>
            <button onClick={handle} >Ref Change</button>
        </div>
    )
}

export default Child