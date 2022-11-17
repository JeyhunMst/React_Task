import React from 'react'


function Inputs(inputValue,setInputValue,setIsShown) {
    const handleClickButton=()=>{
      if (inputValue.fullname.trim().length ) {
        setIsShown(false)
      }
    }
    const handleChangeInputValue=(e)=>{
        const {name,value}=e.target;
        setInputValue({...inputValue, [name]:value});
    }
  return (
    <>
     <input placeholder='fullname' defaultValue={inputValue.fullname} name='fullname' onChange={handleChangeInputValue}/>
     <button>Show</button>
    </>
  )
}

export default Inputs