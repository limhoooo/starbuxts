import React from 'react'
import { Inner } from '../Inner'
import styled from 'styled-components'

const MainMenuContainer = styled.ul`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  margin: 0;
`
const MainMenuLi = styled.li`
  :hover {
    background-color: #2c2a29;
    color: #669900;
    border-radius: 6px 6px 0 0;
  }
`

const ItemName = styled.div`
  padding: 10px 20px 34px 20px;
  font-family: Arial, sans-serif;
  font-size: 13px;

  :hover ~ div {
    display: block;
  }
`
const ItemContents = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  display: none;
  :hover {
    display: block;
  }
`
const ContentsMenu = styled.div`
  background-color: #2c2a29;
`
const ContentsMenuBox = styled.ul`
  width: 1100px;
  margin: 0 auto;
  position: relative;
  display: flex;
  padding: 20px 0;
  li {
    width: 220px;
    h4 {
      font-size: 14px;
      color: #fff;
      margin: 0;
    }
    ul {
      padding: 0;
      li {
        padding: 5px 0;
        font-size: 12px;
        color: #999;
        cursor: pointer;

        :hover {
          color: #669900;
        }
      }
    }
  }
`
const ContentsTexture = styled.div`
  padding: 26px 0;
  font-size: 12px;
  background-image: url('/images/main_menu_pattern.jpg');
  h4 {
    color: #999;
    font-weight: 700;
    margin: 0;
  }
  p {
    color: #669900;
    margin: 4px 0 14px;
    font-size: 12px;
  }
`
export default function MainMenu() {
  const mainMenuList = [
    {
      headerMenu: 'COOFFEE',
      contents: [
        {
          title: '커피',
          menu: [
            {
              menuName: '스타벅스 원두',
            },
            {
              menuName: '스타벅스 비아',
            },
            {
              menuName: '스타벅스 오리가미',
            },
          ],
        },
        {
          title: '에스프레소 음료',
          menu: [
            {
              menuName: '도피오',
            },
            {
              menuName: '에스프레소 마키아또',
            },
            {
              menuName: '아메리카노',
            },
            {
              menuName: '마키아또',
            },
            {
              menuName: '카푸치노',
            },
            {
              menuName: '라떼',
            },
            {
              menuName: '모카',
            },
            {
              menuName: '리스트레또 비안코',
            },
          ],
        },
        {
          title: '커피 이야기',
          menu: [
            {
              menuName: '스타벅스 로스트 스팩트럼',
            },
            {
              menuName: '최상의 아라비카 원두',
            },
            {
              menuName: '한 잔의 커피가 완성되기까지',
            },
            {
              menuName: '클로버® 커피 추출 시스템',
            },
          ],
        },
        {
          title: '최상의 커피를 즐기는 법',
          menu: [
            {
              menuName: '커피 프레스',
            },
            {
              menuName: '푸어 오버',
            },
            {
              menuName: '아이스 푸어 오버',
            },
            {
              menuName: '커피 메이커',
            },
            {
              menuName: '리저브를 매장에서 다양하게 즐기는 법',
            },
          ],
        },
      ],
      subContents: [
        {
          title: '나와 어울리는 커피 찾기',
          content: '스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.',
        },
        {
          title: '최상의 커피를 즐기는 법',
          content: '여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.',
        },
      ],
    },
    {
      headerMenu: 'MENU',
      contents: [
        {
          title: '음료',
          menu: [
            {
              menuName: '콜드 브루',
            },
            {
              menuName: '브루드 커피',
            },
            {
              menuName: '에스프레소',
            },
            {
              menuName: '프라푸치노',
            },
            {
              menuName: '에스프레소',
            },
            {
              menuName: '블렌디드 음료',
            },
            {
              menuName: '스타벅스 피지오',
            },
            {
              menuName: '티(티바나)',
            },
            {
              menuName: '기타 제조 음료',
            },
            {
              menuName: '스타벅스 주스(병음료)',
            },
          ],
        },
        {
          title: '푸드',
          menu: [
            {
              menuName: '베이커리',
            },
            {
              menuName: '케익',
            },
            {
              menuName: '샌드위치 & 샐러드',
            },
            {
              menuName: '따뜻한 푸드',
            },
            {
              menuName: '카푸치노',
            },
            {
              menuName: '과일 & 요거트',
            },
            {
              menuName: '스낵 & 미니 디저트',
            },
            {
              menuName: '아이스크림',
            },
          ],
        },
        {
          title: '상품',
          menu: [
            {
              menuName: '머그',
            },
            {
              menuName: '글라스',
            },
            {
              menuName: '플라스틱 텀블러',
            },
            {
              menuName: '스테인리스 텀블러',
            },
            {
              menuName: '보온병',
            },
            {
              menuName: '악세사리',
            },
            {
              menuName: '커피 용품',
            },
            {
              menuName: '패키지 티(티바나)',
            },
          ],
        },
        {
          title: '카드',
          menu: [
            {
              menuName: '실물카드',
            },
            {
              menuName: 'e-Gift 카드',
            },
          ],
        },
        {
          title: '메뉴 이야기',
          menu: [
            {
              menuName: '콜드 브루',
            },
            {
              menuName: '스타벅스 티바나',
            },
          ],
        },
      ],
      subContents: [
        {
          title: '스타벅스 티바나',
          content:
            '다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.',
        },
      ],
    },
    {
      headerMenu: 'STORE',
      contents: [
        {
          title: '매장 찾기',
          menu: [
            {
              menuName: '퀵 검색',
            },
            {
              menuName: '지역 검색',
            },
            {
              menuName: 'My 매장',
            },
          ],
        },
        {
          title: '매장 이야기',
          menu: [
            {
              menuName: '청담스타',
            },
            {
              menuName: '티바나 인스파이어드 매장',
            },
            {
              menuName: '파미에파크',
            },
          ],
        },
      ],
      subContents: [
        {
          title: '매장 찾기',
          content: '보다 빠르게 매장을 찾아보세요.',
        },
        {
          title: '청담스타',
          content: '스타벅스 1,000호점인 청담스타점을 만나보세요.',
        },
      ],
    },
    {
      headerMenu: 'RESPONSIBILITY',
      contents: [
        {
          title: '지역 사회 참여 활동',
          menu: [
            {
              menuName: '희망배달 캠페인',
            },
            {
              menuName: '재능기부 카페 소식',
            },
            {
              menuName: '커뮤니티 스토어',
            },
            {
              menuName: '청년인재 양성',
            },
            {
              menuName: '우리 농산물 사랑 캠페인',
            },
            {
              menuName: '우리 문화 지키기',
            },
          ],
        },
        {
          title: '환경보호 활동',
          menu: [
            {
              menuName: '환경 발자국 줄이기',
            },
            {
              menuName: '일회용 컵 없는 매장',
            },
            {
              menuName: '커피 원두 재활용',
            },
          ],
        },
        {
          title: '윤리 구매',
          menu: [
            {
              menuName: '윤리적 원두 구매',
            },
            {
              menuName: '공정무역 인증',
            },
            {
              menuName: '커피 농가 지원 활동',
            },
          ],
        },
        {
          title: '글로벌 사회 공헌',
          menu: [
            {
              menuName: '윤리경영 보고서',
            },
            {
              menuName: '스타벅스 재단',
            },
            {
              menuName: '지구촌 봉사의 달',
            },
          ],
        },
      ],
      subContents: [
        {
          title: '커피원두 재활용',
          content: '스타벅스 커피 원두를 재활용 해보세요.',
        },
      ],
    },
    {
      headerMenu: 'MY STARBUCKS REWARDS',
      contents: [
        {
          title: '마이 스타벅스 리워드',
          menu: [
            {
              menuName: '마이 스타벅스 리워드 소개',
            },
            {
              menuName: '등급 및 혜택',
            },
            {
              menuName: '스타벅스 별',
            },
            {
              menuName: '자주하는 질문',
            },
          ],
        },
        {
          title: '스타벅스 카드',
          menu: [
            {
              menuName: '스타벅스 카드 소개',
            },
            {
              menuName: '스타벅스 카드 갤러리',
            },
            {
              menuName: '등록 및 조회',
            },
            {
              menuName: '충전 및 이용안내',
            },
            {
              menuName: '분실신고/환불신청',
            },
            {
              menuName: '자주하는 질문',
            },
          ],
        },
        {
          title: '스타벅스 카드 e-Gift',
          menu: [
            {
              menuName: '스타벅스 카드 e-Gift 소개',
            },
            {
              menuName: '이용안내',
            },
            {
              menuName: '선물하기',
            },
            {
              menuName: '자주하는 질문',
            },
          ],
        },
      ],
      subContents: [
        {
          title: '스타벅스 카드 등록하기',
          content:
            '카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.',
        },
      ],
    },
    {
      headerMenu: `WHAT'S NEW`,
      contents: [
        {
          title: '프로모션 & 이벤트',
          menu: [
            {
              menuName: '전체',
            },
            {
              menuName: '스타벅스 카드',
            },
            {
              menuName: '마이 스타벅스 리워드',
            },
            {
              menuName: '온라인',
            },
          ],
        },
        {
          title: '새소식',
          menu: [
            {
              menuName: '전체',
            },
            {
              menuName: '상품 출시',
            },
            {
              menuName: '스타벅스의 문화',
            },
            {
              menuName: '스타벅스 사회공헌',
            },
            {
              menuName: '스타벅스 카드출시',
            },
          ],
        },
        {
          title: '매장별 이벤트',
          menu: [
            {
              menuName: '일반 매장',
            },
            {
              menuName: '신규 매장',
            },
          ],
        },
      ],
      subContents: [
        {
          title: '매장별 이벤트',
          content: '스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.',
        },
        {
          title: '소셜 스타벅스',
          content: '다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!',
        },
      ],
    },
  ]

  return (
    <MainMenuContainer>
      {mainMenuList.map((item, index) => (
        <MainMenuLi key={index}>
          <ItemName>{item.headerMenu}</ItemName>
          {/* 컴포넌트 분리예정 */}
          <ItemContents>
            <ContentsMenu>
              <ContentsMenuBox>
                {item.contents.map((contens, contensIndex) => (
                  <li key={contensIndex}>
                    {
                      <>
                        <h4>{contens.title}</h4>
                        <ul>
                          {contens.menu.map((menu, menuIndex) => (
                            <li key={menuIndex}>{menu.menuName}</li>
                          ))}
                        </ul>
                      </>
                    }
                  </li>
                ))}
              </ContentsMenuBox>
            </ContentsMenu>
            <ContentsTexture>
              <Inner>
                {item.subContents.map((item, index) => (
                  <span key={index}>
                    <h4>{item.title}</h4>
                    <p>{item.content}</p>
                  </span>
                ))}
              </Inner>
            </ContentsTexture>
          </ItemContents>
        </MainMenuLi>
      ))}
    </MainMenuContainer>
  )
}
