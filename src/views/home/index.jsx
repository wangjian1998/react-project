import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner'
import { getGoodPriceAction, getHighScoreDataAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'


const Home = memo(() => {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getGoodPriceAction())
    dispatch(getHighScoreDataAction())
  }, [dispatch])

  const {goodPrice, highScoreData} = useSelector((state)=> ({
    goodPrice: state.home.goodPrice,
    highScoreData: state.home.highScoreData
  }), shallowEqual)


  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        <div className="good-price">
          <SectionHeader title={goodPrice.title}/>
          <SectionRooms roomList={goodPrice.list}></SectionRooms>
        </div>
        <div className="high-score">
          <SectionHeader title={highScoreData.title} subTitle={highScoreData.subtitle}/>
          <SectionRooms roomList={highScoreData.list}></SectionRooms>
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
