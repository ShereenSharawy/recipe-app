import React, { useState, useEffect,useRef } from "react";
import RecipeCard from "../components/recipecard/recipecard";
import RecipeSearch from "../components/recipesearch/recipesearch";
import LoadingSpinner from "../components/loadingsnipper/loadingspinner";
import AddRecipePopover from "../components/addrecipepopover/addrecipepopover";
import {Modal} from "bootstrap"
function Recipes() {
    let orginalRecipes = []

    let [finalRecipes, updateRecipes] = useState(orginalRecipes);
    let [isRecipeError, setRecipeError] = useState(false);
    let [isRecipeLoading, setRecipeLoading] = useState(false);
    let [isPopoverShow, updateShowpopover] = useState(false);
    const recipeModal= useRef();
    const [modal, setModal] = useState([]);

    useEffect(() => {
        getRecipes()
    },[])

    const getRecipes = async () => {
        try {
            setRecipeLoading(true);
            let response = await fetch('http://localhost:5000/recipes');
           // if (response.status === 200) {
                const data = await response.json();
                orginalRecipes = data; 
                updateRecipes(data);
                setRecipeLoading(false); 
           /* } else {
                throw 'Error fetching users list' 
            }*/
        } catch (e) {
           setRecipeLoading(false);
            setRecipeError(true);  
        }

    }
    function updateRecipesHandler(searchValue) {
        // let updatedRecipes =finalRecipes.filter((recipe) => recipe.title === searchValue);
        let updatedRecipes = [];
        finalRecipes.forEach(recipe => {
            if (recipe.title.includes(searchValue)) {
                updatedRecipes.push(recipe);
            }
        })
        updateRecipes(updatedRecipes);
    }
    function clearSearchHandler() {
        updateRecipes(orginalRecipes);
    }
    function showpopoverHandler(){
        const modal = new Modal(recipeModal.current, {keyboard: false})
        setModal(modal);
        modal.show();
    }
    function hidepopoverHandler(){
        updateShowpopover(false);
    }
    function updateRecipesListHandler(newRecipe){
        console.log('useernew',newRecipe);
        updateRecipes(previousState => [...previousState, newRecipe])
      //  updateRecipes({...finalRecipes,newRecipe})
    }
    return (
        <>
        <div className="d-flex">
        <button className="btn btn-primary  p-2 ms-auto" onClick={showpopoverHandler}> Add New recipe</button>
        </div>
        <AddRecipePopover PopoverToggle={isPopoverShow} hidePopover={hidepopoverHandler}  ref={recipeModal} updateRecipesList={updateRecipesListHandler}/>
        <RecipeSearch updateRecipes={updateRecipesHandler} clearRecipes={clearSearchHandler} />
            {isRecipeLoading && <LoadingSpinner/>}
            {!isRecipeError && <div className="recipes-container">
                {finalRecipes.map((recipe,index) => (

                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>}
            {isRecipeError && <div className="alert alert-danger" role="alert">Error Has Happened whe reterive data </div>}
        </>
    )
}
export default Recipes;