import { Power1, gsap } from 'gsap'
import { useEffect } from 'react'

// 위아래로 움직이는 gasp animation hook
export default function useFloating(selector, delay, size) {
  // 범위 랜덤 함수(소수점 2자리까지)
  function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }
  useEffect(() => {
    gsap.to(selector.current, random(1.5, 2.5), {
      y: size,
      repeat: -1,
      yoyo: true,
      ease: Power1.easeInOut,
      delay: random(0, delay),
    })
  }, [])
}
