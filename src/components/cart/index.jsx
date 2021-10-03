import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './cart.css';
function Cart(props) {
    const cartList = useSelector(state => state.cart.listCart)
    const [cart, setCart] = useState([]);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        setCart(cartList);
        localStorage.setItem('cart', JSON.stringify(cartList))
        const Sum = () => {
            const quantity = document.querySelectorAll(".cpp__quantity");
            let sum = 0;
            cart.map((cart,index) => {
              return sum+=quantity[index].value*cart.pricenew;
            })
            setSum(sum);
        }
        Sum();
        return () => {
            
        }
    })
    const Sum = () => {
        const quantity = document.querySelectorAll(".cpp__quantity");
        const quaArray = [];
        let sum=0
        cart.map((cart,index) => {
            sum += quantity[index].value * cart.pricenew;
            quaArray.push(quantity[index].value);
            return true;
            
        })
        localStorage.setItem('quantity', JSON.stringify(quaArray))
        setSum(sum);
    }
    return (
        
        <div className="cart__container">
            <div className="cart__productC">
                {   
                    cart.map((cart1, index) => {
                                    return <div key={index} className="cart__product">
                                <a href={cart1.title} className="cart__img"><img src={cart1.src} alt="" /></a>
                                <div className="cp__infor">
                                    <a className="cp__name" href={cart1.title}>{cart1.name}</a>
                                    <p className="cp__pricec">
                                        <input type="number" className="cpp__quantity" onClick={Sum} min="1" max="5" defaultValue={(JSON.parse(localStorage.getItem('quantity'))[index]!==undefined)?JSON.parse(localStorage.getItem('quantity'))[index]:"1"}></input>
                                        <span className="cpp__price">x{cart1.pricenew} đ</span></p>
                                </div>
                                <i className="far fa-times-circle cart__close" />
                            </div>    
                    })
                }
            </div>
           
            <p className="cart__price">Tổng tiền :{sum} đ</p>
            <a href="/" className="cart__see" > Xem giỏ hàng</a><br/>
            <a href="/" className="cart__pay"> Thanh toán</a>
        </div>
    );
}

export default Cart;