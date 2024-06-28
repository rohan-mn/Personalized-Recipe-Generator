'use client';

import React, { useState, useEffect } from 'react';
import IngredientInput from './components/IngredientInput';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import Popup from './components/Popup';
import { getRecipesByIngredients, getRecipeDetails } from './helpers/recipeApi';
import Layout from './layout';
import './globals.css'; // Make sure to create this CSS file

const Home = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showRecipeList, setShowRecipeList] = useState(false);

  useEffect(() => {
    // Simulate fetching initial data
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after data is fetched
    }, 500);
  }, []);

  const handleSearchRecipes = async () => {
    setIsLoading(true);
    const ingredientValues = ingredients.map(ingredient => ingredient.value);
    try {
      const recipeResults = await getRecipesByIngredients(ingredientValues);
      setRecipes(recipeResults);
      setShowRecipeList(true);
      window.scrollTo(0, 0); // Scroll to the top of the page
    } catch (error) {
      console.error("Error fetching recipes:", error);
      // You might want to set an error state here and display it to the user
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectRecipe = async (id) => {
    setIsLoading(true);
    try {
      const recipeDetails = await getRecipeDetails(id);
      setSelectedRecipe(recipeDetails);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
      // You might want to set an error state here and display it to the user
    } finally {
      setIsLoading(false);
    }
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedRecipe(null);
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="loading">Loading...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="home-container">
        <h1>Personalized Recipe Finder</h1>
        <div className="ingredient-input">
          <IngredientInput ingredients={ingredients} setIngredients={setIngredients} />
        </div>
        <button onClick={handleSearchRecipes}>Find Recipes</button>
        {showRecipeList && <RecipeList recipes={recipes} onSelectRecipe={handleSelectRecipe} />}
        {isPopupOpen && (
          <Popup
            handleClose={handleClosePopup}
            content={<RecipeDetails recipe={selectedRecipe} handleClose={handleClosePopup} />}
          />
        )}
        <footer className="footer">
          <p>Made by Rohan Menon</p>
        </footer>
      </div>
      
    </Layout>
  );
};

export default Home;