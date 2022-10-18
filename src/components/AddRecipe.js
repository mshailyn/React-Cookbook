import { useState } from "react"

const AddRecipe = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [instructions, setInstructions] = useState('')
    const [time, setTime] = useState('')
    const [priority, setPriority] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a recipe')
            return
        }
        onAdd({ text, ingredients,instructions, time, priority })

        setText('')
        setIngredients('')
        setInstructions('')
        setTime('')
        setPriority(false)
    }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'> 
            <label>Recipe Name</label>
            <input 
            value={text} 
            type="text" 
            placeholder="Recipe"
            onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className='form-control'> 
            <label>Ingredients</label>
            <input
            value={ingredients} 
            type="text" 
            placeholder="Ingredients"
            onChange={(e) => setIngredients(e.target.value)}
            ></input>
            
        </div>
        <div className='form control form-control-text'> 
            <label>Instructions</label>
            <textarea
            value={instructions} 
            type="text" 
            placeholder="Instructions"
            onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
        </div>
        <div className='form-control'>
            <label>Cook Time</label>
            <input 
            value={time}
            type="text" 
            placeholder="Add Cook Time"
            onChange={(e) => setTime(e.target.value)}
            ></input>
        </div>
        <div className='form-control-check'>
            <label>Prioritize</label>
            <input 
            checked={priority}
            value={priority}
            type="checkbox"
            onChange={(e) => setPriority(e.currentTarget.checked)}
            ></input>
        </div>
        <input className="btn btn-block" type="submit"></input>
    </form>
  )
}

export default AddRecipe