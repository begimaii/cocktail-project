import React from "react";

export default function SingleDrinkModal({ drink, handleCloseModal, isOpen }) {
  if (!isOpen) return null;
  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith("strIngredient") && drink[key])
    .map((key) => drink[key]);
  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{drink.strDrink}</h2>
        <img src={drink.strDrinkThumb} alt={drink.strCategory} />
        <span className="ingredients">
          {" "}
          <p>
            <strong>Ingredients:</strong>
          </p>
          <ol>
            {" "}
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ol>
        </span>
        <p className="instr">Instructions: {drink.strInstructions}</p>
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
}
