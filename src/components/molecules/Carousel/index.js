import React from 'react';

import { CarouselContainer, CarouselImage, CarouselInner, CarouselSlide } from './styles';

const Carousel = ({ children, ...rest }) => {
  return (
    <CarouselContainer>
      <CarouselInner {...rest}>{children}</CarouselInner>
    </CarouselContainer>
  );
};

Carousel.Slide = CarouselSlide;
Carousel.Image = CarouselImage;

export default Carousel;
