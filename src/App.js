import { useState, useEffect  } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Recipes from './components/Recipes'
import AddRecipe from './components/AddRecipe'
import About from './components/About'
import RecipeDetails from './components/RecipeDetails'

const App = () => {
  const [showAddRecipe, setShowAddRecipe] = useState(false)
  const [recipes, setRecipes] = useState([ ])

  useEffect( () => {
    const getRecipes = async () => {
      const recipesFromServer = await fetchRecipes()
      setRecipes(recipesFromServer)
    }

    getRecipes()
  },[])


  //Fetch Recipes
  const fetchRecipes = async () => {
    const res = await fetch('https://cookbook-json-server.herokuapp.com/recipes')
    const data = await res.json()
    return data
  }

  const fetchRecipe = async (id) => {
    const res = await fetch(`https://cookbook-json-server.herokuapp.com/recipes/${id}`)
    const data = await res.json()
    return data
  }


  //Add Recipe
  const addRecipe = async (recipe) => {

    const res = await fetch('https://cookbook-json-server.herokuapp.com/recipes', {method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(recipe)
    })
  
    const data = await res.json()
  
    setRecipes([...recipes, data])
  }
  
  //Delete Recipe
  const deleteRecipe = async (id) => {
    await fetch(`https://cookbook-json-server.herokuapp.com/recipes/${id}`, {
      method: 'DELETE',
    })
    setRecipes(recipes.filter((recipe) => recipe.id !== id))
  }

  //Toggle Priority
  
  const togglePriority = async (id) =>  {
    const recipeToToggle = await fetchRecipe(id)
    const updRecipe = {...recipeToToggle, priority: !recipeToToggle.priority}

    const res = await fetch(`https://cookbook-json-server.herokuapp.com/recipes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updRecipe)
      })

    const data = await res.json()

    setRecipes(recipes.map((recipe) => recipe.id === id ? {...recipe, priority: data.priority} : recipe))
  }

  return (
    <Router>
    <div className = 'container'>
      <Header onAdd={() => setShowAddRecipe(!showAddRecipe)} showAdd={showAddRecipe}/>
      <Routes>
      <Route
        path='/'
        element = {
          <>
      {showAddRecipe && <AddRecipe onAdd={addRecipe}/>}
      {recipes.length > 0 ? (
        <Recipes recipes={recipes} onDelete={deleteRecipe} onToggle={togglePriority}/>
        )  : (
          'No Recipes to Display'
        )}
          </>
        }
        />
      <Route path='/about' element={<About/>}/>
      <Route path='/recipes/:id' element={<RecipeDetails/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
