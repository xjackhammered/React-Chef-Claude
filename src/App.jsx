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
  

  const [form, setForm] = React.useState([])

  const elementsAll = form.map(element => (
      <li key={element}>{element}</li>
  ))

  function formProcessing(event){
    
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newElement = formData.get("ingredient")
    setForm(prev => [...prev, newElement])

  }


  return (
    <>
      <div className='min-h-screen bg-slate-500 bg-fixed'>
        <Header />
        <Form elements={elementsAll} onSubmit={formProcessing}/>
        {elementsAll.length > 3 ? <div className='shadow-xl/30 bg-slate-400 border-2 text-center mt-52 w-96 h-20 mx-auto'>
          <h2 className='font-bold'>Ready to get a recipe?</h2>
          <p>Press the button and generate a recipe</p>
          <button onClick={handleClick} className='bg-orange-400 text-amber-50 w-l font-bold rounded-full'>{state ? "Clear":"Get Recipe"}</button>
        </div>:""}
        {state ? <ClaudeRecipe ingredients={form} />:""}
      </div>
    </>
  )
}

export default App
