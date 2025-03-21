import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import Spinner from "./Spinner";

function RecipesList({ searchQuery }) {
  const [recipeList, setRecipeList] = useState([]); // state for recipe list

  useEffect(() => {
    setTimeout(() => {
      fetch("https://dummyjson.com/recipes") //API
        .then((res) => res.json())
        .then((data) => {
          setRecipeList(data.recipes);
        });
    }, 3000);
  }, []);

  return (
    <>
      {recipeList.length == 0 && <Spinner />}
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {recipeList
            .filter((recipe) => {
              return searchQuery === ""
                ? true
                : recipe.name.toLowerCase().includes(searchQuery);
            })
            .map((recipe) => (
              <div key={recipe.id} className="col">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default RecipesList;
