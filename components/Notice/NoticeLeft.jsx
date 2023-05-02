import React from 'react'
import styled from 'styled-components'
import { SvgIcon } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'

const NoticeLeftContainer = styled.div`
  width: 60%;
  height: 100%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  h2 {
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    margin-right: 20px;
  }

  .swiper-container {
    height: 62px;
    flex-grow: 1;
  }
  .swiper-slide {
    height: 62px;
    display: flex;
    align-items: center;
  }
  .swiper-slide a {
    color: #fff;
    cursor: pointer;
  }
  .notice-line__more {
    width: 62px;
    height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .notice-line__more .material-icons {
    color: #fff;
    font-size: 30px;
  }
`
export default function NoticeLeft() {
  return (
    <NoticeLeftContainer>
      <h2>공지사항</h2>
      <Swiper
        style={{ height: '40px', margin: 0 }}
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
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
      <SvgIcon
        component={AddCircleOutlineIcon}
        inheritViewBox
        style={{ color: '#fff' }}
      />
    </NoticeLeftContainer>
  )
}
