import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import  './index.css';

const CountrySlider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='slider-container'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img className="d-block w-100" src="/slide.png" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/slide1.png" alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src="/slide2.png" alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        </div>
    );
};

export default CountrySlider;
