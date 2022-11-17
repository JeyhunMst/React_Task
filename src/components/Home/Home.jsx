import React from 'react'
import Inputs from '../Inputs';
import InputValue from '../InputValue';

function Home(){
    const [inputValue, setInputValue]=React.useState({
        fullname:""
    })
    const [isShown,setIsShown]=React.useState(true);
  return (
    <>
    {isShown ? (<>
        <Inputs inputValue={inputValue} setInputValue={setInputValue} setIsShown={setIsShown}/>
    </>
    ) : 
    (<>
       <InputValue fullname={inputValue.fullname} setIsShown={setIsShown}/>
    </>)}
    </>
  )
}

export default Home