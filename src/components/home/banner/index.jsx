import React from 'react';
import './banner.css';
function Banner(props) {
    const {src}=props
    return (
        <div className="banner__container">
            <img className="banner__img" src={src} alt="" />
        </div>
    );
}

export default Banner;