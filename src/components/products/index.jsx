import React from 'react';
import './product.css';
import sp1 from './sp1.png';
function Product(props) {
    const { product } = props;
    return (
        
        <div className="product__container">
            <a href={`${product.title}`} className="product__a">
                <img className="product__img" src={product.src} alt="" />
                <p className="product__name">{product.name}</p>
            </a>
            <span className="product__priceold"><del>{ product.priceold}</del> <u>đ</u></span>
            <span className="product__pricenew">{ product.pricenew}<u>đ</u></span>
        </div>
    );
}

export default Product;