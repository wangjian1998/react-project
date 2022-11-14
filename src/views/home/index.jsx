import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner'
import { getGoodPriceAction } from '@/store/modules/home'


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
        {goodPrice.title}
      </div>
    </HomeWrapper>
  )
})

export default Home
