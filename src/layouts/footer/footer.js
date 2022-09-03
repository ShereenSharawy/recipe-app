import React from 'react';
import '../footer/footer.scss';
function Footer(){
    return(
        <div className="footer container">
        <div className="footer-section">
            <h3 className="title">RecipesProject.com</h3>
            <p>RecipesProject is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free.</p>
            <p>&copy; 2022 | All Rights Reserved</p>
        </div>
        <div className="footer-section">
            <h3 className="title">Contact Us</h3>
            <p>RecipesProject@gmail.com</p>
            <p>+342-5324-9454</p>
            <p>2393 Street NYC</p>
        </div>
        <div className="footer-section">
            <h3 className="title">Socials</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
        </div>
    </div>
    )
}
export default Footer;