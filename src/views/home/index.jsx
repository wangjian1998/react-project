import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner'
import { getGoodPriceAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'


const Home = memo(() => {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getGoodPriceAction())
  }, [dispatch])

  const {goodPrice} = useSelector((state)=> ({goodPrice: state.home.goodPrice}), shallowEqual)


  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
        <div className="section-header">
          <SectionHeader title={goodPrice.title}/>
        </div>
        <SectionRooms roomList={goodPrice.list}></SectionRooms>
      </div>
    </HomeWrapper>
  )
})

export default Home
