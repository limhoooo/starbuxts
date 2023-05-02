import React, { useRef } from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { FreeMode, Pagination, Navigation } from 'swiper'
import Image from 'next/image'
import { Btn } from '../UI/Btn'
import { SvgIcon } from '@mui/material'

const PromotionContainer = styled.div`
  height: ${({ isToggle }) => (isToggle ? '0px' : '693px')};
  background-color: #f6f5ef;
  position: relative;
  transition: all 0.4s;
  overflow: hidden;
  .swiper {
    width: calc(819px * 3 + 20px);
    height: 553px !important;
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: calc((819px * 3 + 20px) / -2);
  }
  .swiper-slide {
    opacity: 0.5;
    transition: opacity 1s;
    position: relative;
  }
  .swiper-slide-active {
    opacity: 1;
  }
  .swiper-slide .btn {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .swiper-pagination {
    bottom: -40px;
    left: 0;
    right: 0;
  }
  .swiper-pagination .swiper-pagination-bullet {
    background-color: transparent;
    background-image: url('../images/promotion_slide_pager.png');
    width: 12px;
    height: 12px;
    margin-right: 6px;
    outline: none;
  }

  .swiper-pagination .swiper-pagination-bullet:last-child {
    margin-right: 0;
  }

  .notice .promotion .swiper-pagination .swiper-pagination-bullet-active {
    background-image: url('../images/promotion_slide_pager_on.png');
  }

  .swiper-prev,
  .swiper-next {
    width: 42px;
    height: 42px;
    border: 2px solid #333;
    border-radius: 50%;
    position: absolute;
    top: 300px;
    z-index: 1;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }

  .swiper-prev {
    left: 50%;
    margin-left: -480px;
    .material-icons {
      height: 25px;
    }
  }
  .swiper-next {
    right: 50%;
    margin-right: -480px;
    .material-icons {
      height: 25px;
    }
  }

  .swiper-prev:hover,
  .swiper-next:hover {
    background-color: #333;
    color: #fff;
  }
`

export default function Promotion({ isToggle }) {
  const swiperRef = useRef()
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const paginationRef = useRef(null)
  return (
    <PromotionContainer isToggle={isToggle}>
      <Swiper
        freeMode={true}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          el: '.promotion .swiper-pagination',
          clickable: true,
        }}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        modules={[FreeMode, Pagination, Navigation]}
        style={{ height: '100%' }}
      >
        <SwiperSlide>
          <Image
            width={820}
            height={525}
            src="/images/promotion_slide1.jpg"
            alt="이미지"
          />
          <Btn className="btn">자세히 보기</Btn>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={820}
            height={525}
            src="/images/promotion_slide2.jpg"
            alt="이미지"
          />
          <Btn className="btn">자세히 보기</Btn>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={820}
            height={525}
            src="/images/promotion_slide3.jpg"
            alt="이미지"
          />
          <Btn className="btn">자세히 보기</Btn>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={820}
            height={525}
            src="/images/promotion_slide4.jpg"
            alt="이미지"
          />
          <Btn className="btn">자세히 보기</Btn>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            width={820}
            height={525}
            src="/images/promotion_slide5.jpg"
            alt="이미지"
          />
          <Btn className="btn">자세히 보기</Btn>
        </SwiperSlide>
      </Swiper>
      <div className="swiper-pagination" ref={paginationRef}></div>
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
    </PromotionContainer>
  )
}
