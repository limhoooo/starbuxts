import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper' // 추가
import 'swiper/swiper.css'

SwiperCore.use([Navigation, Pagination, Autoplay])

export default () => {
  return (
    <div>
      <Swiper
        style={{ marginTop: '100px', width: '200px', height: '40px' }}
        direction={'vertical'}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }} // 추가
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}
