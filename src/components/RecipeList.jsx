import './RecipeList.css'

import React from 'react'

const RecipeList = ({recipes}) => {
  return (
    <div>
        {recipes.map((recipe) => (
            <div>
                <p key = {recipe.id}>{recipe.title}</p>
            </div>

        ))}
    </div>
  )
}

export default RecipeList