import React from 'react';

const RecipeDetails = ({ recipe, handleClose }) => {
  

  const calories = recipe.nutrition?.nutrients?.find(n => n.name === 'Calories')?.amount || 'N/A';

  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      <h3>Nutritional Information</h3>
      <p>Calories: {calories}</p>
      
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default RecipeDetails;
