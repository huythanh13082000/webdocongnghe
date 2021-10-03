import React from 'react';
import Banner from './banner';
import Op from './optionproduct';
import Slide from './slide';
import './home.css';
import Product from '../products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import logo from './logocompany.png';
import Footer from '../footer';
import p1 from "./1.jpg"
import p2 from "./2.jpg"
import p3 from "./3.jpg"
import p4 from "./4.jpg"
function HomePage(props) {
  const productlist = useSelector(state => state.product.list);
  const saleArray = [];
  productlist.map((product) => {
    if (product.sale !== "") return saleArray.push(product);
    else return false
  })
  const element = () => {
    const Elemet = [];
    for (let i = 0; i < Math.ceil(saleArray.length / 4); i++) {
      Elemet.push(<div className="bproduct__container">
        {(saleArray[0 + i * 4]) ? < Product product={saleArray[0 + i * 4]} /> : ""}
        {(saleArray[1 + i * 4]) ? <Product product={saleArray[1 + i * 4]} /> : ""}
        {(saleArray[2 + i * 4]) ? <Product product={saleArray[2 + i * 4]} /> : ""}
        {(saleArray[3 + i * 4]) ? <Product product={saleArray[3 + i * 4]} /> : ""}
      </div>)
    }
    return Elemet.map((e, index) => {
      return <div className={`bproduct__containerS ${(index === 0) ? " bps__active" : ''}`} key={index}>{e}
        <div>
          <i className="fas fa-chevron-left bpc__left"></i>
          <i className="fas fa-chevron-right bpc__right"></i>
        </div>
      </div>
    });
    
  }
  useEffect(() => {
   
    const left = document.querySelectorAll('.bpc__left');
    const right = document.querySelectorAll('.bpc__right');
    const bpS = document.querySelectorAll('.bproduct__containerS');
    for (let index = 0; index < left.length; index++) {
      left[index].addEventListener('click', () => {
        const bps_active = document.querySelector('.bps__active');
        for (let index1 = 0; index1 < bpS.length; index1++) {
          bpS[index1].classList.remove('bps__active');
          if (bps_active.previousSibling) {
            const bps = bps_active.previousSibling;
             
            bps.classList.add('bps__active')
          }
          else {
            bpS[bpS.length - 1].classList.add('bps__active')
          }
        }
      })
    }
    for (let index = 0; index < right.length; index++) {
      
      right[index].addEventListener('click', () => {
        const bps_active = document.querySelector('.bps__active');
        for (let index1 = 0; index1 < bpS.length; index1++) {
          bpS[index1].classList.remove('bps__active');
          if (bps_active.nextSibling) {
            const bps = bps_active.nextSibling;
            bps.classList.add('bps__active')
          }
          else {
            bpS[0].classList.add('bps__active')
          }
        }
      })
    }
    return () => {
    }
  })
  return (
    <div>
        
        <Slide />
        <Op />
        <div className="banner__wrap">
          <Banner src={p1} />
        <Banner src={ p2}/>
        <Banner src={ p3}/>
        <Banner src={ p4}/>
        </div>
      <div className="banner__product">
        {element()}
      </div>
      <div className="bannerI__container">
        <img src="http://maytinh4.giaodienwebmau.com/wp-content/uploads/2021/07/5.png" alt="" />  
      </div>
      <div className="logocompany__wrap">
        <img src={logo} alt="" />
      </div>
      <div className="product__hot">
        <div className="ph__title">
          <p>SẢN PHẨM BÁN CHẠY</p>
        </div>
        <div className="ph__container">
          {productlist.map((product,index) => {
            return <Product key={index} product={product} />
          })   
          }
        </div>
      </div>
      <Footer />
      
    </div>
    
    );
}

export default HomePage;