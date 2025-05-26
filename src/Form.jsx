import React from 'react'

export default function Form(){
    
    const [state, setState] = React.useState([])

    const elementsAll = state.map(element => (
        <li key={element}>{element}</li>
    ))

    function formProcessing(formData){
        
        const newElement = formData.get("ingredient")
        setState(prev => [...prev,newElement])

    }
    
    return (
        
        <>
        <form action={formProcessing} className="flex justify-center mt-12 space-x-5" method="POST">
      
            <input className="rounded-xl w-xl border-2" type="text" id="ingredient" name="ingredient" placeholder="e.g oregano" /><br />
            <input className="rounded-xl p-2 border-2 bg-black text-white font-bold" type="submit" value="+ Add Ingredient" />
             
        </form>

        <ul className="ml-150 w-3xl py-5 list-disc mt-10 text-2xl font-bold">
            {elementsAll}
        </ul>
        </>

        
    )
}