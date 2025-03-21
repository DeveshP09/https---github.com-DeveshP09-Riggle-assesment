import { useState } from "react";
import "./recipeCard.css";

function RecipeCard({ recipe }) {
  const [showInstructions, setShowInstructions] = useState(false);
  const handleOnclick = () => {
    setShowInstructions((prev) => !prev); // Toggle visibility
  };

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
          <div class="card h-100">
            <img
              src={recipe.image}
              class="card-img-top img"
              alt={recipe.image}
            />
            <div class="card-body">
              <h4 class="card-title">{recipe.name}</h4>
              <p class="card-text">
                <h5>Ingredients required :</h5>
                {recipe.ingredients.map((ingredients) => (
                  <span key={recipe.ingredients}>{ingredients + " ,"}</span> //ingredient listing
                ))}
              </p>

              <button
                type="button"
                class="btn btn-outline-warning"
                onClick={handleOnclick}
              >
                {showInstructions ? "Hide Instructions" : "View More"}
              </button>

              {/* Conditional Rendering of Instructions */}
              {showInstructions && (
                <div class="instructions">
                  <h5>
                    Time required:{" "}
                    {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min
                  </h5>

                  <h5>Preperation steps:</h5>
                  <ol>
                    {recipe.instructions.map((instructions) => (
                      <li key={recipe.instructions}>{instructions}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecipeCard;
