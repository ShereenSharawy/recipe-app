import CustomImage from "../CustomImage";
import React from "react";

 function HeroSection(){
    const images = [process.env.PUBLIC_URL +'/images/gallery/img_1.jpg',
    process.env.PUBLIC_URL +'/images/gallery/img_2.jpg',
    process.env.PUBLIC_URL +'/images/gallery/img_3.jpg',
    process.env.PUBLIC_URL +'/images/gallery/img_4.jpg',
    process.env.PUBLIC_URL +'/images/gallery/img_5.jpg']
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title border-start border-5 border-primary ps-4 mb-5">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery hero-sec-img">
                { images.map((src, index) => (

                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}
export default HeroSection;