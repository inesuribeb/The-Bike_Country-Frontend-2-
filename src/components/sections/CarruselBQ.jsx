import React, { useState, useEffect, useRef } from "react";
import Button from "../button/Button";
import NavigateBeforeOutlinedIcon from "@mui/icons-material/NavigateBeforeOutlined";
import NavigateNextOutlinedIcon from "@mui/icons-material/NavigateNextOutlined";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
function CarruselBQ({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const length = images.length;
    const nextSlide = () => {
        setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
    };
    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
    };

    return (
        <div className="carousel-section">
            <div className="top-div">
                <h5>· Basque Country</h5>
            </div>
            <div id="first-div">
                <div id="third-div">
                    <h3 id="discover">DISCOVER THE</h3>
                    <h3 id="basque-country">BASQUE COUNTRY</h3>
                    <p>
                        We believe travel is worth taking time over; that a
                        great holiday means getting under the skin of a place,
                        meeting its people, indulging in its culture and
                        understanding its history and customs.
                    </p>

                    <Button
                        onClick={() => {}}
                        children={
                            "SEE THE BEAUTY AND MAGIC OF THE BASQUE COUNTRY --->"
                        }
                    >
                        SEE THE BEAUTY AND MAGIC OF THE BASQUE COUNTRY
                        <TrendingFlatIcon />
                    </Button>
                </div>
                <div id="second-div">
                    <div className="carousel-container">
                        <Button
                            id="left-arrow"
                            onClick={() => {
                                prevSlide();
                            }}
                            children={<NavigateBeforeOutlinedIcon />}
                        ></Button>
                        <img src={images[currentIndex]} alt="" />
                        <Button
                            id="right-arrow"
                            onClick={() => {
                                nextSlide();
                            }}
                            children={<NavigateNextOutlinedIcon />}
                        ></Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarruselBQ;
