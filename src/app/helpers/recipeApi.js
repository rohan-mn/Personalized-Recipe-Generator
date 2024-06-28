import axios from 'axios';

const API_KEY = 'c95652c691aa449d8972fb757cd77bf2';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const getRecipesByIngredients = async (ingredients) => {
  const response = await axios.get(`${BASE_URL}/findByIngredients`, {
    params: {
      ingredients: ingredients.join(','),
      number: 10,
      apiKey: API_KEY,
    },
  });
  return response.data;
};

export const getRecipeDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });
  return response.data;
};
