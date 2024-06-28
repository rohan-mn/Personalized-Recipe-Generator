import React from 'react';
import Select from 'react-select';

const IngredientInput = ({ ingredients, setIngredients }) => {
  const ingredientOptions = [
    { value: 'chicken', label: 'Chicken' },
    { value: 'tomato', label: 'Tomato' },
    { value: 'cheese', label: 'Cheese' },
    { value: 'bread', label: 'Bread' },
    { value: 'egg', label: 'Egg' },
    { value: 'milk', label: 'Milk' },
    { value: 'butter', label: 'Butter' },
    { value: 'sugar', label: 'Sugar' },
    { value: 'salt', label: 'Salt' },
    { value: 'pepper', label: 'Pepper' },
    { value: 'flour', label: 'Flour' },
    { value: 'rice', label: 'Rice' },
    { value: 'pasta', label: 'Pasta' },
    { value: 'carrot', label: 'Carrot' },
    { value: 'onion', label: 'Onion' },
    { value: 'garlic', label: 'Garlic' },
    { value: 'potato', label: 'Potato' },
    { value: 'beef', label: 'Beef' },
    { value: 'pork', label: 'Pork' },
    { value: 'fish', label: 'Fish' },
    { value: 'shrimp', label: 'Shrimp' },
    { value: 'mushroom', label: 'Mushroom' },
    { value: 'spinach', label: 'Spinach' },
    { value: 'broccoli', label: 'Broccoli' },
    { value: 'bell pepper', label: 'Bell Pepper' },
    // Add more options as needed
  ];

  return (
    <Select
      isMulti
      name="ingredients"
      options={ingredientOptions}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={setIngredients}
      value={ingredients}
    />
  );
};

export default IngredientInput;
