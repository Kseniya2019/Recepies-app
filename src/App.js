import { useEffect, useState } from "react";
import "./App.css";
import AllRecipes from "./AllRecipes";
import image from "./vegetables-background.jpg";

function App() {
  const [search, setSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");

  useEffect(() => {
    const getRecipe = async () => {
      const answer = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=192a2186&app_key=c15a9aa5b96af4c261287ef3dc71548f`
      );
      const data = await answer.json();
      setRecipe(data.hits);
    };
    getRecipe();
  }, [wordSubmitted]);

  const myProducts = (e) => {
    const product = e.target.value;
    setSearch(product);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(search);
  };

  return (
    <div className="container">
      <div className="sub-container">
        <img className="cover" src={image} alt="cover" />
        <h1>RECIPE APP</h1>
        <h2>Search for recepies from the products you have in the house</h2>
        <form onSubmit={finalSearch}>
          <input
            onChange={myProducts}
            placeholder="Type products..."
            value={search}
          />
        </form>
        <div>
          <button onClick={finalSearch}>Search</button>
        </div>
        <div className="recipeContainer">
          {recipe.map((item, index) => (
            <AllRecipes objRec={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
