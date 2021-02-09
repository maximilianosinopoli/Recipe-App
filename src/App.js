import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from "./recipe"

function App() {

const APP_ID = "c256c968";
const APP_KEY = "25cb45405909cd33ca7efc204db7f6d8";

const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState("");
const [query, setQuery] = useState("chicken")

useEffect(() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json()
  console.log(data.hits);
  setRecipes(data.hits);
}

const updateSearch = e => {
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map(res => (
          <Recipe 
            id= {res.recipe.calories}
            key= {res.recipe.calories}
            title= {res.recipe.label}
            image= {res.recipe.image}
            ingredients= {res.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
