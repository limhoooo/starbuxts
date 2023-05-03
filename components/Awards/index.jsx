import React, { useRef } from 'react'
import styled from 'styled-components'
import { Inner } from '../UI/Inner'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Autoplay } from 'swiper'

import Image from 'next/image'
import { SvgIcon } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const AwardsContainer = styled.div`
  background-color: #272727;

  & > div {
    padding: 40px 0;
  }
  .swiper-prev,
  .swiper-next {
    width: 42px;
    height: 42px;
    outline: none;
    border: 2px solid #fff;
    border-radius: 50%;
    color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    opacity: 0.3;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }
  .swiper-prev {
    left: -100px;
    .material-icons {
      height: 25px;
    }
  }
  .swiper-next {
    right: -100px;
    .material-icons {
      height: 25px;
    }
  }
  .swiper-prev:hover,
  .swiper-next:hover {
    background-color: #fff;
    color: #333;
  }
`

export default function Awards() {
  const swiperRef = useRef()
  return (
    <AwardsContainer>
      <Inner>
        <Swiper
          freeMode={true}
          slidesPerView={5}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Navigation, Autoplay]}
          style={{ height: '100%' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
            <SwiperSlide>
              <Image
                width={192}
                height={40}
                src={`/images/awards_slide${index}.jpg`}
                alt="이미지"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="swiper-prev"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <div className="material-icons">
            <SvgIcon component={ArrowBackIcon} inheritViewBox />
          </div>
        </div>
        <div
          className="swiper-next"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <div className="material-icons">
            <SvgIcon component={ArrowForwardIcon} inheritViewBox />
          </div>
        </div>
      </Inner>
    </AwardsContainer>
  )
}
