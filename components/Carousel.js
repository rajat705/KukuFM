// components/Carousel.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from 'react-slick';

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 2rem 0;
`;

const CarouselItem = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

const Carousel = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://d31ntp24xvh0tq.cloudfront.net/api/v2.1/home/all/?preferred_langs=hindi&page=1&lang=engli');
      setItems(result.data.items || []);
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {items.map((item, index) => (
          <CarouselItem key={index}>
            <img src={item.image_url} alt={item.title} />
          </CarouselItem>
        ))}
      </Slider>
    </CarouselWrapper>
  );
};

export default Carousel;
