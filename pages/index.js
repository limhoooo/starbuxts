import { getHaeder } from '../lib/data'
import Header from '../components/Header'
import Visual from '../components/Visual'
import Notice from '../components/Notice'
import Rewards from '../components/Rewards'
import Youtube from '../components/Youtube'
import SeasonProject from '../components/SeasonProject'
import ReserveCoffee from '../components/ReserveCoffee'
import Favorite from '../components/Favorite'
import ReserveStore from '../components/ReserveStore'
import FindStore from '../components/FindStore'
import Awards from '../components/Awards'
import Footer from '../components/Footer'
import Test from '../components/Test'

export default function Home({ headerInfo }) {
  return (
    <>
      <Header headerInfo={headerInfo} />
      <Visual />
      <Notice />
      <Rewards />
      <Youtube />
      <SeasonProject />
      <ReserveCoffee />
      <Favorite />
      <ReserveStore />
      <FindStore />
      <Awards />
      <Test />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const headerInfo = getHaeder()
  return {
    props: {
      headerInfo,
    },
  }
}
