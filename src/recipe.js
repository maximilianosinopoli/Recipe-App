import React from 'react';
import style from "./recipe.module.css"

function Recipe({id, title, image, ingredients}) {
    return (
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <ol key={id} className={style.letra}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image} alt=""/>
       </div>
    );      
}

export default Recipe;