// components/Carousel.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
`;

const CarouselSlide = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${(props) => `translateX(-${props.index * 100}%)`};
`;

const CarouselItem = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/preferred_langs=hindi&page=1&lang=english');
        setItems(result.data.items);
      } catch (error) {
        console.error("Error fetching carousel data:", error);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <CarouselWrapper>
      <CarouselSlide index={index}>
        {items.map((item, i) => (
          <CarouselItem key={i}>
            <img src={item.image} alt={item.title} style={{ width: '100%' }} />
          </CarouselItem>
        ))}
      </CarouselSlide>
    </CarouselWrapper>
  );
};

export default Carousel;
