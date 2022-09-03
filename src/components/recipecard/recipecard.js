import React from "react";
import "../recipecard/recipecard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
function RecipeCard(props){
    return(
        <div className="recipe-card bg-light mt-5 mb-5">
        <img src={props.recipe.image} alt={props.recipe.title} className="recipe-img"/>
        <div className="recipe-card-info">
            <img className="auther-img" src={props.recipe.authorImg} alt=""/>
            <p className="recipe-title">{props.recipe.title}</p>
            <p className="recipe-desc">{props.recipe.description}</p>
            <a className="view-btn" href="#!">VIEW RECIPE
            <FontAwesomeIcon icon={faArrowRight} />
            </a>
        </div>
    </div>
    )
}
export default RecipeCard