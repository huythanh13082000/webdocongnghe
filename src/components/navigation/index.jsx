import React, { useState,useEffect } from 'react';
import './nav.css';
import Op from '../home/optionproduct';
import Cart from '../cart';
import { useSelector } from 'react-redux';
import logo from './logo.png'
Nav.propTypes = {
    
};

function Nav(props) {
    const [scrollM, setScrollm] = useState();
    const [scrollP, setScrollp] = useState();
    const [countItem, setCountitem] = useState(useSelector(state => state.cart.listCart).length);
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            (window.pageYOffset > 250) ? setScrollm("Menu__fix") : setScrollm('');
        })
    }, [scrollM]);
    useEffect(() => {
        window.addEventListener('scroll',()=>{
            (window.pageYOffset > 250) ? setScrollp("display") : setScrollp('');
            
        })
    }, [scrollP]);

    return (
        <div>
            
            <div className="topNav">
                <div className="topNav__services">
                    <span className="s__item i1">Cam kết giá tốt nhất</span>
                    <span className="s__item i2">Miễn phí vận chuyển</span>
                    <span className="s__item i3">Thanh toán khi nhận hàng</span>
                    <span className="s__item i4">Bảo hành tận nơi</span>
                </div>
                <div className="topNav__lrcontainer">
                    <span className="tN__login">Đăng nhập</span>
                    <span className="tN__cart">Giỏ hàng<Cart /><span className="countItem">{ countItem}</span></span>
                    
                </div>
                
            </div>
            <nav className="Nav__wrap">
                <a href="/" className="Nav__logo">
                    <img className="Nav__logoImg" src={logo} alt="" />
                </a>
                <div className="Nav__container">
                <input type="text" className="Nav__search" placeholder="Nhập sản phẩm cần tìm..."/>
                </div>
                <div className="Nav__contact">
                    <p className="Nav__Ccontent">Mua Hàng online</p>
                    <p className="Nav__Cnumber">0963896765</p>
                </div>
            </nav>
            <div className={`Menu__container ${scrollM}`}>
                <ul className="Menu__list">
                    <li className={`Menu__lItem product ${scrollP}`}>
                        <a href="/danhmucsanpham"><i className="fas fa-bars">
                            </i> Danh mục sản phẩm
                        </a>
                        <Op/>
                    </li>
                    <li className="Menu__lItem"><a href="/banhang"><i className="fas fa-phone-alt"></i> Bán hàng trực tuyến</a></li>
                    <li className="Menu__lItem"><a href="/"><i className="fas fa-tags"></i> Khuyến mãi</a></li>
                    <li className="Menu__lItem"><a href="/"><i className="fa fa-newspaper"></i> Tin Tức</a></li>
                    <li className="Menu__lItem"><a href="/"><i className="fa fa-chalkboard"></i> Xây dựng cấu hình</a></li>
                    <li className="Menu__lItem deal"><a href="/"> DEAL GIÁ SỐC</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;