import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Image from 'next/image';

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  display: flex;

  .carousel-item {
    display: inline-block;
    width: 100%;
  }

  .carousel-controls {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
  }

  button {
    background: rgba(255, 255, 255, 0.7);
    border: none;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

const Carousel = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli'
      );
      setItems(result.data.items);
    };

    fetchData();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <CarouselWrapper>
      {items.map((item, index) => (
        <div
          key={index}
          className="carousel-item"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <Image src={item.image} alt={item.title} width={800} height={400} />
        </div>
      ))}
      <div className="carousel-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </CarouselWrapper>
  );
};

export default Carousel;
