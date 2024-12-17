import React, { useState, useEffect, useRef } from "react";
import Button from "../button/Button";

function ImageCarousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    useEffect(() => {});
    //TODO: Diseño del carrusel por Ines
    return (
        <div className="carousel-section">
            <div className="carousel-container">
                <Button
                    id="left-arrow"
                    onClick={() => {
                        prevSlide();
                    }}
                    text={"Back"}
                ></Button>
                <img src={images[currentIndex]} alt="" />
                <Button
                    id="right-arrow"
                    onClick={() => {
                        nextSlide();
                    }}
                    text={"Next"}
                ></Button>
            </div>
            
        </div>
    );
}
export default ImageCarousel;