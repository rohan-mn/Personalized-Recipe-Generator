import React, { useEffect, useRef } from 'react';
import './RecipeList.css'; // Make sure to create this CSS file

const RecipeList = ({ recipes, onSelectRecipe }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [recipes]);

  return (
    <div className="recipe-list-container" ref={listRef}>
      <h2>Recipe Recommendations</h2>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe.id)} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <span className="recipe-title">{recipe.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;