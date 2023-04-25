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
  ]

  return (
    <MainMenuContainer>
      {mainMenuList.map((item, index) => (
        <MainMenuLi>
          <span key={index}>
            <ItemName>{item.headerMenu}</ItemName>
            <ItemContents>
              <ContentsMenu>
                <ContentsMenuBox>
                  {item.contents.map((item, index) => (
                    <li key={index}>
                      {
                        <>
                          <h4>{item.title}</h4>
                          <ul>
                            {item.menu.map((menu, menuIndex) => (
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
          </span>
        </MainMenuLi>
      ))}
      {/* <li class="item">
        <div class="item__name">MENU</div>
        <div class="item__contents">
          <div class="contents__menu">
            <ul class="inner">
              <li>
                <h4>음료</h4>
                <ul>
                  <li>콜드 브루</li>
                  <li>브루드 커피</li>
                  <li>에스프레소</li>
                  <li>프라푸치노</li>
                  <li>블렌디드 음료</li>
                  <li>스타벅스 피지오</li>
                  <li>티(티바나)</li>
                  <li>기타 제조 음료</li>
                  <li>스타벅스 주스(병음료)</li>
                </ul>
              </li>
              <li>
                <h4>푸드</h4>
                <ul>
                  <li>베이커리</li>
                  <li>케익</li>
                  <li>샌드위치 & 샐러드</li>
                  <li>따뜻한 푸드</li>
                  <li>과일 & 요거트</li>
                  <li>스낵 & 미니 디저트</li>
                  <li>아이스크림</li>
                </ul>
              </li>
              <li>
                <h4>상품</h4>
                <ul>
                  <li>머그</li>
                  <li>글라스</li>
                  <li>플라스틱 텀블러</li>
                  <li>스테인리스 텀블러</li>
                  <li>보온병</li>
                  <li>액세서리</li>
                  <li>커피 용품</li>
                  <li>패키지 티(티바나)</li>
                </ul>
              </li>
              <li>
                <h4>카드</h4>
                <ul>
                  <li>실물카드</li>
                  <li>e-Gift 카드</li>
                </ul>
              </li>
              <li>
                <h4>메뉴 이야기</h4>
                <ul>
                  <li>콜드 브루</li>
                  <li>스타벅스 티바나</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="contents__texture">
            <Inner class="inner">
              <h4 class="new">스타벅스 티바나</h4>
              <p>
                다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를
                선보입니다.
              </p>
            </Inner>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item__name">STORE</div>
        <div class="item__contents">
          <div class="contents__menu">
            <ul class="inner">
              <li>
                <h4>매장 찾기</h4>
                <ul>
                  <li>퀵 검색</li>
                  <li>지역 검색</li>
                  <li>My 매장</li>
                </ul>
              </li>
              <li>
                <h4>매장 이야기</h4>
                <ul>
                  <li>청담스타</li>
                  <li>티바나 인스파이어드 매장</li>
                  <li>파미에파크</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="contents__texture">
            <Inner class="inner">
              <h4>매장 찾기</h4>
              <p>보다 빠르게 매장을 찾아보세요.</p>
              <h4 class="new">청담스타</h4>
              <p>스타벅스 1,000호점인 청담스타점을 만나보세요.</p>
            </Inner>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item__name">RESPONSIBILITY</div>
        <div class="item__contents">
          <div class="contents__menu">
            <ul class="inner">
              <li>
                <h4>지역 사회 참여 활동</h4>
                <ul>
                  <li>회망배달 캠페인</li>
                  <li>재능기부 카페 소식</li>
                  <li>커뮤니티 스토어</li>
                  <li>청년인재 양성</li>
                  <li>우리 농산물 사랑 캠페인</li>
                  <li>우리 문화 지키기</li>
                </ul>
              </li>
              <li>
                <h4>환경보호 활동</h4>
                <ul>
                  <li>환경 발자국 줄이기</li>
                  <li>일회용 컵 없는 매장</li>
                  <li>커피 원두 재활용</li>
                </ul>
              </li>
              <li>
                <h4>윤리 구매</h4>
                <ul>
                  <li>윤리적 원두 구매</li>
                  <li>공정무역 인증</li>
                  <li>커피 농가 지원 활동</li>
                </ul>
              </li>
              <li>
                <h4>글로벌 사회 공헌</h4>
                <ul>
                  <li>윤리경영 보고서</li>
                  <li>스타벅스 재단</li>
                  <li>지구촌 봉사의 달</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="contents__texture">
            <Inner class="inner">
              <h4>커피원두 재활용</h4>
              <p>스타벅스 커피 원두를 재활용 해보세요.</p>
            </Inner>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item__name">MY STARBUCKS REWARDS</div>
        <div class="item__contents">
          <div class="contents__menu">
            <ul class="inner">
              <li>
                <h4>마이 스타벅스 리워드</h4>
                <ul>
                  <li>마이 스타벅스 리워드 소개</li>
                  <li>등급 및 혜택</li>
                  <li>스타벅스 별</li>
                  <li>자주하는 질문</li>
                </ul>
              </li>
              <li>
                <h4>스타벅스 카드</h4>
                <ul>
                  <li>스타벅스 카드 소개</li>
                  <li>스타벅스 카드 갤러리</li>
                  <li>등록 및 조회</li>
                  <li>충전 및 이용안내</li>
                  <li>분실신고/환불신청</li>
                  <li>자주하는 질문</li>
                </ul>
              </li>
              <li>
                <h4>스타벅스 카드 e-Gift</h4>
                <ul>
                  <li>스타벅스 카드 e-Gift 소개</li>
                  <li>이용안내</li>
                  <li>선물하기</li>
                  <li>자주하는 질문</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="contents__texture">
            <Inner class="inner">
              <h4>스타벅스 카드 등록하기</h4>
              <p>
                카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.
              </p>
            </Inner>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="item__name">WHAT'S NEW</div>
        <div class="item__contents">
          <div class="contents__menu">
            <ul class="inner">
              <li>
                <h4>프로모션 & 이벤트</h4>
                <ul>
                  <li>전체</li>
                  <li>스타벅스 카드</li>
                  <li>마이 스타벅스 리워드</li>
                  <li>온라인</li>
                  <li>2017 스타벅스 플래너</li>
                </ul>
              </li>
              <li>
                <h4>새소식</h4>
                <ul>
                  <li>전체</li>
                  <li>상품 출시</li>
                  <li>스타벅스의 문화</li>
                  <li>스타벅스 사회공헌</li>
                  <li>스타벅스 카드출시</li>
                </ul>
              </li>
              <li>
                <h4>매장별 이벤트</h4>
                <ul>
                  <li>일반 매장</li>
                  <li>신규 매장</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="contents__texture">
            <Inner class="inner">
              <h4>매장별 이벤트</h4>
              <p>스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.</p>
              <h4>소셜 스타벅스</h4>
              <p>다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!</p>
            </Inner>
          </div>
        </div>
      </li> */}
    </MainMenuContainer>
  )
}
