import React, {useState} from 'react'
import { SlideData } from './SlideData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import './GallerySlide.css'
const GallerySlider = ({slides }) =>{

   const [current, setCurrent] = useState(0)
   const length = slides.length
    

   const nextSlide = () => {
       setCurrent(current === 0 ? length-1 : current -1 )
   }
   const prevSlide = () => {
       setCurrent(current === 0 ? length-1 : current -1 )
   }
   if (!Array.isArray(slides) || slides.length <= 0){
       return null;
   }

   return (
       <section className = "slider">
           <FaArrowAltCircleLeft className = "left-arrow" onClick = {prevSlide} />
           <FaArrowAltCircleRight className = "right-arrow" onClick = {nextSlide} />
           {
               SlideData.map((slide, index) => {
                    return (
                        <div className = {index === current ? 'slide active' : 'slide'} keys = {index}>
                            {index === current && (<img src = {slide.image} alt = 'images' className = "image"/>)}
                 
                    </div>
                    )
                    
               })
           }
       </section>
   )
}
export default GallerySlider