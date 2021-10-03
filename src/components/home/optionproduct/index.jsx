import React from 'react';
import { useState,useEffect } from 'react';
import './op.css';
function Op(props) {
    const [opDisplay,setOpdisplay]=useState('')
    useEffect(() => {
        window.addEventListener('scroll', () => {
            (window.pageYOffset > 250) ? setOpdisplay('op__display') : setOpdisplay('');
        })
       
    }, [opDisplay])
    return (
        <div className={`op__container ${opDisplay}`}>
                <ul className="op__list">
                    <li className="op__litem opl1">
                        <a href="/">Laptop</a>
                        <div className="op__laptophover">
                        <span><a href="/">Laptop Dell</a></span>
                        <span><a href="/">Laptop Acer</a></span>
                        <span><a href="/">Laptop Asus</a></span>
                        <span><a href="/">Laptop HP</a></span>
                        <span><a href="/">Laptop LG</a></span>
                        </div>
                    </li>
                    <div className="op__litem opl2"><a href="/">Máy tính để bàn</a></div>
                    <li className="op__litem opl3"><a href="/">Màn hình máy tính</a></li>
                    <li className="op__litem opl4"><a href="/">Camera</a></li>
                    <li className="op__litem opl5"><a href="/">Thiết bị kỹ thuật số</a></li>
                    <li className="op__litem opl6"><a href="/">Thiết bị văn phòng</a></li>
                    <li className="op__litem opl7"><a href="/">Thiết bị lưu trữ</a></li>
                    <li className="op__litem opl8"><a href="/">Thiết bị mạng</a></li>
                    <li className="op__litem opl9"><a href="/">Phụ kiện laptop</a></li>
                    <li className="op__litem opl10"><a href="/">Linh kiện máy tính</a></li>
                    <li className="op__litem opl11"><a href="/">Túi bọc, túi sách, ba lô</a></li>
                    <li className="op__litem opl12"><a href="/">Sản phẩm apple</a></li>
                </ul>
                
            </div>
    );
}
export default Op;