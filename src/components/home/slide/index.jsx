import React, { useState } from 'react';
import './slide.css';
import slide1 from './img/slide1.jpg';
import slide2 from './img/slide2.jpg';
import slide3 from './img/slide3.jpg';
function Slide(props) {
    const Array = [{ src: slide1, active:"active"},
        { src: slide2, active:""},
        { src: slide3,active:""}
    ]
    const handleLeftclick = () => {
        const  active= document.querySelector(".active");
        const slide = document.querySelectorAll('.slide__img');
        slide.forEach((slide) => {
            slide.classList.remove('active');
            slide.classList.remove('R1');
            slide.classList.remove('R2');
            slide.classList.remove('L1');
            slide.classList.remove('L2');
        })
        if (active !== slide[slide.length-1]) {
            const Prev = active.nextSibling;
            active.classList.add('R2')
            Prev.classList.add('active')
            Prev.classList.add('R1')
        }
        else {
            active.classList.add('R2')
            slide[0].classList.add('active');
            slide[0].classList.add('R1');
        } 

    }
    const handleRightclick = () => {
        const  active= document.querySelector(".active");
        const slide = document.querySelectorAll('.slide__img');
        slide.forEach((slide) => {
            slide.classList.remove('active');
            slide.classList.remove('L1');
            slide.classList.remove('L2');
            slide.classList.remove('R1');
            slide.classList.remove('R2');
        })
        if (active !== slide[0]) {
            const Next = active.previousSibling;
            Next.classList.add('active');
            active.classList.add('L2');
            Next.classList.add('L1');
        }
        else {
            active.classList.add('L2')
            slide[slide.length-1].classList.add('active');
            slide[slide.length-1].classList.add('L1');
        } 
    }
   const element= Array.map((array, index) => {
        return <img key={index} className={`slide__img img${index+1} ${array.active}`} src={array.src} alt="" />
    })
    return (
        <div className="slide__container">
            <div className ={`slide__imgC `}>
                {element}
            </div>
            
            <button className={`slide__btn btnL`} onClick={handleLeftclick} ><i className="fas fa-chevron-left"></i></button>
            <button className={`slide__btn btnR`} onClick={handleRightclick} ><i className="fas fa-chevron-right"></i></button>
        </div>
    );
}

export default Slide;