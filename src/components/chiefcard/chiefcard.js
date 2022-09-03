import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-solid-svg-icons"
import React from "react";

function ChiefCard({chief}) {
    /*<FontAwesomeIcon icon={faFacebook} />
    <FontAwesomeIcon icon={faTwitter} />
    <FontAwesomeIcon icon={faInstagram} />*/
    return (
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h3 className="chief-card-name">{chief.name}</h3>
                <p className="chief-recipe-count">Recipes: <b>{chief.recipesCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="cheif-icons">
                   
                </p>
            </div>
        </div>
    )
}
export default ChiefCard;