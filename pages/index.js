import { getHaeder } from '../lib/data'
import Header from '../components/Header'
import Visual from '../components/Visual'
import Notice from '../components/Notice'
import Rewards from '../components/Rewards'
import Youtube from '../components/Youtube'

export default function Home({ headerInfo }) {
  return (
    <>
      <Header headerInfo={headerInfo} />
      <Visual />
      <Notice />
      <Rewards />
      <Youtube />
      {/* <TestSw /> */}
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
