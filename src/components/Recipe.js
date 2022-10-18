import {FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'

const Recipe = ({ recipe, onDelete, onToggle}) => {
  return (
    <div className={`recipe ${recipe.priority ? 'priority' : ''}`} onDoubleClick={() => onToggle(recipe.id)}>
        <h3>
            {recipe.text} 
            <FaTimes className="del" style={{ color: 'orange' , cursor:'pointer',}}
            onClick={() => onDelete(recipe.id)}
            />  
        </h3>
        <p>{recipe.time}</p>
        <p><Link to={`/recipes/${recipe.id}`}>View Details</Link></p>
    </div>
  )
}

export default Recipe