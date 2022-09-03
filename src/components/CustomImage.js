import React from "react";
function CustomImage({imgSrc, pt}){
    // <img src={require(imgSrc)} alt="" />
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={imgSrc} alt="" />
        </div>
    )
}
export default CustomImage;