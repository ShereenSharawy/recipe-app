import React, { useState, useRef } from "react";
import "../searchtags/searchtags.scss";
function SearchTags(props) {
    return (
        <>
        <h2 className="border-start border-5 border-primary ps-4 mb-5">Previous Searches</h2>
        <div className="search-tags-container">
        {props.tags?.map((tag, index) => (
                    <div className="search-item" key={index} >{tag}</div>
                ))}
        </div>
        </>

    )
}
export default SearchTags;