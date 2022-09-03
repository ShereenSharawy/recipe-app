import React,{useState,useRef }from "react";
import "../recipesearch/recipesearch.scss";
import SearchTags from "../searchtags/searchtags";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch ,faXmark } from "@fortawesome/free-solid-svg-icons"
function RecipeSearch(props){
    const inputRef = useRef();
    let searches = ['pizza', 'burger', 'cookies', 'juice', 'biriyani', 'salad', 'ice cream', 'lasagna', 'pudding', 'soup'];
    let [finalSearches, updateSearches] = useState(searches);
    function recipeSearchHandler() {
        updateSearches([...finalSearches, inputRef.current.value]);
        props.updateRecipes(inputRef.current.value);
    }
    function clearSearchHandler(){
        props.clearRecipes();
    }
    return(
        <div className="search-tags section">
        <SearchTags tags={finalSearches}/>
        <div className="search-box">
            <input type="text" placeholder="Search ..."  ref={inputRef} className="bg-light"/>
            <button className="btn" onClick={recipeSearchHandler}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
            <button className="btn" onClick={clearSearchHandler}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    </div>
    )
}
export default RecipeSearch;