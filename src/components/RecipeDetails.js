import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

function RecipeDetails() {
    const [loading, setLoading] = useState(true)
    const [recipe, setRecipe] = useState({})

    const params = useParams()
    const navigate = useNavigate()
    const {pathname} = useLocation()

    useEffect(() => {
        const fetchRecipe = async () => {
            const res =await fetch(`https://cookbook-json-server.herokuapp.com/recipes/${params.id}`)
            const data = await res.json()

            if(res.status === 404) {
                navigate('/')
            }

            setRecipe(data)
            setLoading(false)
        }

        fetchRecipe()
    })

    return loading ? (
        <h3>Loading...</h3>
    ) : (
        <div className="details">
            <h3>{recipe.text}</h3>
            <p>Cooktime: {recipe.time}</p>
            <p>Ingredients: {recipe.ingredients}</p>
            <p className="ingred">Instructions: {recipe.instructions}</p>
            <Button onClick = {() => {
                navigate(-1)
            }}  text='Go Back'/>
        </div>
    )
}

export default RecipeDetails 