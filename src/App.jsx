import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Form from './Form'
import ClaudeRecipe from './ClaudeRecipe'
import React from 'react'

function App() {
  const [state, setState] = React.useState(false)
  
  function handleClick(){
    setState(prev => !prev)
  }
  
  return (
    <>
      <Header />
      <Form />
      <div className='bg-slate-400 border-2 text-center mt-52 w-96 h-20 mx-auto'>
        <h2 className='font-bold'>Ready for a recipe?</h2>
        <p>Press the button and generate a recipe</p>
        <button onClick={handleClick} className='bg-orange-400 text-amber-50 w-l font-bold rounded-full'>Get recipe</button>
      </div>
      {state ? <ClaudeRecipe />:""}
    </>
  )
}

export default App
