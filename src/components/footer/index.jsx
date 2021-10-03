import React from 'react';
import './footer.css'
import footer from './footer.png';
function Footer(props) {
    return (
        <footer>
            <div className="footer__container">
               <img src={footer} alt="" />
            </div>
       </footer>
    );
}

export default Footer;