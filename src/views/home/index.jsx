import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner'
import { getGoodPriceAction } from '@/store/modules/home'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'


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
        <ul className='list-wrapper'>
          {
            goodPrice.list?.slice(0,8).map(item => {
              return (
              <RoomItem key={item.id} itemData={item}></RoomItem>
              )
            })
          }
        </ul>
      </div>
    </HomeWrapper>
  )
})

export default Home
