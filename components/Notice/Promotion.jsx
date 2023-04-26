import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

const PromotionContainer = styled.div`
  height: ${({ isToggle }) => (isToggle ? '0px' : '693px')};
  background-color: #f6f5ef;
  position: relative;
  overflow: hidden;
  transition: all 0.4s;
  overflow: hidden;
  .swiper-container {
    width: calc(819px * 3 + 20px);
    height: 553px;
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
    bottom: 40px;
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
  }
  .swiper-next {
    right: 50%;
    margin-right: -480px;
  }

  .swiper-prev:hover,
  .swiper-next:hover {
    background-color: #333;
    color: #fff;
  }
`

export default function Promotion({ isToggle }) {
  return (
    <PromotionContainer isToggle={isToggle}>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }} // 추가
      >
        <SwiperSlide>
          <a>크리스마스 & 연말연시 스타벅스 매장 영업시간 변경 안내</a>
        </SwiperSlide>
        <SwiperSlide>
          <a>[당첨자 발표] 2022 스타벅스 플래너 영수증 이벤트</a>
        </SwiperSlide>
        <SwiperSlide>
          <a>스타벅스커피 코리아 애플리케이션 버전 업데이트</a>
        </SwiperSlide>
        <SwiperSlide>
          <a>[당첨자 발표] 뉴이어 전자영수증 이벤트</a>
        </SwiperSlide>
      </Swiper>
      {/* <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="./images/promotion_slide1.jpg" alt="이미지" />
            <a href="javsacript:void(0)" class="btn">
              자세히 보기
            </a>
          </div>
          <div class="swiper-slide">
            <img src="./images/promotion_slide2.jpg" alt="이미지" />
            <a href="javsacript:void(0)" class="btn">
              자세히 보기
            </a>
          </div>
          <div class="swiper-slide">
            <img src="./images/promotion_slide3.jpg" alt="이미지" />
            <a href="javsacript:void(0)" class="btn">
              자세히 보기
            </a>
          </div>
          <div class="swiper-slide">
            <img src="./images/promotion_slide4.jpg" alt="이미지" />
            <a href="javsacript:void(0)" class="btn">
              자세히 보기
            </a>
          </div>
          <div class="swiper-slide">
            <img src="./images/promotion_slide5.jpg" alt="이미지" />
            <a href="javsacript:void(0)" class="btn">
              자세히 보기
            </a>
          </div>
        </div>
      </div> */}
      {/* <div class="swiper-pagination"></div>
      <div class="swiper-prev">
        <div class="material-icons">arrow_back</div>
      </div>
      <div class="swiper-next">
        <div class="material-icons">arrow_forward</div>
      </div> */}
    </PromotionContainer>
  )
}
