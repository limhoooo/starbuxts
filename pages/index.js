import styled from 'styled-components'
import Header from '../components/Header'
import Visual from '../components/Visual'
import Notice from '../components/Notice'
import { getHaeder } from '../lib/data'
import TestSw from '../components/TestSw'
import Rewards from '../components/Rewards'

export default function Home({ headerInfo }) {
  return (
    <>
      <Header headerInfo={headerInfo} />
      <Visual />
      <Notice />
      {/* <TestSw /> */}
      <Rewards />
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
