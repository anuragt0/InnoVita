import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './css/app.css'; // Import a separate CSS file for styling

const maxIngredientsToShow = 5;

const RightBody = () => {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [showAllIngredients, setShowAllIngredients] = useState(false);

  const handleShowAllIngredients = () => {
    setShowAllIngredients(!showAllIngredients);
  };

  const ingredients = [
    { name: 'Ingredient 1', description: 'Description for Ingredient 1' },
    { name: 'Ingredient 2', description: 'Description for Ingredient 2' },
    { name: 'Ingredient 3', description: 'Description for Ingredient 3' },
    { name: 'Ingredient 4', description: 'Description for Ingredient 4' },
    { name: 'Ingredient 5', description: 'Description for Ingredient 5' },
    { name: 'Ingredient 6', description: 'Description for Ingredient 6' },
  ];

  const handleIngredientClick = (name) => {
    setOpenDropdowns((prevOpenDropdowns) => ({
      ...prevOpenDropdowns,
      [name]: !prevOpenDropdowns[name],
    }));
  };

  return (
    <> 
    <div className="right-body">
      <h2>Line Bar Graph</h2>
      <h2>Ingredient List</h2>
      
        <ul className='ingredient_div' style={{"marginTop" : "100px"}}>
          {ingredients
            .slice(0, showAllIngredients ? ingredients.length : maxIngredientsToShow)
            .map((ingredient, index) => (
              <li 
               role="alert" key={index} onClick={()=> handleIngredientClick(ingredient.name)}>
               {/* //////////////////////////////////////// */}
                <div  

////////////////////////////////////////

                 className={`ingredient-div ${openDropdowns[ingredient.name] ? 'active' : ''}`}>
                  {ingredient.name}
                  {/* <button onClick={() => handleIngredientClick(ingredient.name)}>
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={openDropdowns[ingredient.name] ? 'rotate-icon' : ''}
                    />
                  </button> */}
                </div>
                {openDropdowns[ingredient.name] && (
                  <div className="ingredient-description">
                    <h3>{ingredient.name}</h3>
                    <p>{ingredient.description}</p>
                  </div>
                )}
              </li>
            ))}
        </ul>
        <div class="container">
    <div class="left-section">
        <div class="value">
            <span class="main-value">194.05</span>
            <span class="sub-text">Low</span>
        </div>
    </div>
    <div class="middle-section">
        <div class="gradient-bar">
            <span class="indicator-dot"></span>
            <div class="tooltip">
                <span class="tooltip-value">239.40</span>
            </div>
        </div>
    </div>
    <div class="right-section">
        <div class="value">
            <span class="main-value">291.05</span>
            <span class="sub-text text-right">High</span>
        </div>
    </div>
</div>

      <button onClick={handleShowAllIngredients}>
        {showAllIngredients ? 'View Top 5' : 'View All'}
      </button>
    </div>
    </> );
};

export default RightBody;
