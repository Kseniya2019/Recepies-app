function AllRecipes({ objRec }) {
  return (
    <div className="recipe">
      <h3>{objRec.recipe.label}</h3>
      <p>{objRec.recipe.dishType}</p>
      <img
        className="recipePhoto"
        src={objRec.recipe.image}
        alt="food"
        width="80%"
      />
      <p>{objRec.recipe.ingredientLines}</p>
    </div>
  );
}

export default AllRecipes;
