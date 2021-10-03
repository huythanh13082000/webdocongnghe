import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import './productD.css';
import Footer from '../footer';
import { addNewCart } from '../../actions/cart';
function ProductD(props) {
    const productlist = useSelector(state => state.product.list);
    const cart = useSelector(state => state.cart.listCart)
    const [url, setUrl] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        productlist.map((product) => {
            if (product.title === window.location.pathname) {
               setUrl(product)
                
            }
            
            return false;    
         })
    })
  
    const addTocart = () => {  
        const cProduct = url;
         let dem = 0;
        cart.map((cart) => {
            if (cart.name === url.name) {
                return dem++;
            }
            else return 0;
        })

         if (dem === 0) {
             const action = addNewCart(cProduct);
             dispatch(action)
         }
         else alert('Sản phẩm đã có trong giỏ hàng!')
    }
    return (
        <>
        <div className="PrD__wrap">
        <div className="PrD__container">
            <img className="PrD__imgP" src={url.src} alt="" />
            <div className="PrD__infoP">
                <h2 className="PrD__Pname">{url.name}</h2>
                <p><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></p>
                <span className="PrD__priceold"><del>{url.priceold}</del> đ </span>
                <span className="PrD__pricenew">{url.pricenew} đ</span>
                <div className="PrD__btncontainer">
                    <a href =""className="PrD__addTocart " onClick={addTocart}><i className="fas fa-cart-plus"></i> Thêm vào giỏ <p>Giao tận nơi, nắp đặt miễn phí</p></a>
                    <button className="PrD__pay"><i className="fas fa-credit-card"></i> Thanh toán ngay <p>Giao tận nơi, nắp đặt miễn phí</p></button>
                </div>
            </div>
            </div>
        </div>
            <Footer />
            </>
    );
}

export default ProductD;