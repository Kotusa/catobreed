import { Carousel } from 'antd';
import styled from 'styled-components';

import leftArrow from '@assets/icons/left-arrow.svg';
import rightArrow from '@assets/icons/right-arrow.svg';
import breakpoint from '@constants/media';

export const CarouselContainer = styled.div`
  max-width: 750px;
  width: 100%;
  @media ${breakpoint.md} {
    max-width: 690px;
    margin: 0 auto;
  }
  @media ${breakpoint.sm} {
    max-width: 490px;
  }
  @media ${breakpoint.xs} {
    max-width: 335px;
  }
  @media ${breakpoint.xxs} {
    max-width: 275px;
  }
`;

export const CarouselInner = styled(Carousel)`
  width: 100%;
  height: 450px;
  .slick-list {
    height: 100%;
  }
  .slick-arrow {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    z-index: 10;
    &.slick-prev {
      left: 20px;
      &::before {
        content: '';
        display: block;
        background-image: url(${leftArrow});
        background-position: center;
        background-size: contain;
        width: 20px;
        height: 20px;
        margin: 0px auto;
      }
    }
    &.slick-next {
      right: 20px;
      &::before {
        display: block;
        background-image: url(${rightArrow});
        background-position: center;
        background-size: contain;
        width: 20px;
        height: 20px;
        margin: 0px auto;
      }
    }
    &:hover,
    &:focus {
      background-color: #fff;
    }
  }
  .slick-slide {
    height: 450px;
    div {
      height: 100%;
    }
    @media ${breakpoint.md} {
      height: 380px;
    }
    @media ${breakpoint.md} {
      height: 310px;
    }
    @media ${breakpoint.xs} {
      height: 230px;
    }
  }
  @media ${breakpoint.md} {
    height: 380px;
  }
  @media ${breakpoint.md} {
    height: 310px;
  }
  @media ${breakpoint.xs} {
    height: 230px;
  }
`;

export const CarouselSlide = styled.div``;

export const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
