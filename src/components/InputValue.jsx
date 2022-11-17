import React from 'react'

function InputValue(fullname,setIsShown) {
    const handleGoback=()=>{
        setIsShown(true)
    }
  return (<>
    <button onClick={handleGoback} ></button>
    <h1>{fullname}</h1>
  </>
  )
}

export default InputValue