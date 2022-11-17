import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import {HomeWrapper} from './style'
import HomeBanner from './c-cpns/home-banner'
import { getGoodPriceAction, getHighScoreDataAction, getDisCountDataAction, getRecommendDataAction, getLongForDataAction, getPlusDataAction } from '@/store/modules/home'
import SectionHomeV2 from './c-cpns/section-home-v2'
import SectionHomeV1 from './c-cpns/section-home-v1'
import SectionLongFor from './c-cpns/section-longfor'
import SectionPlus from './c-cpns/section-plus'


const Home = memo(() => {

  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getGoodPriceAction())
    dispatch(getHighScoreDataAction())
    dispatch(getDisCountDataAction())
    dispatch(getRecommendDataAction())
    dispatch(getLongForDataAction())
    dispatch(getPlusDataAction())
  }, [dispatch])

  const {goodPrice, highScoreData, discountData, recommendData, longForData, plusData} = useSelector((state)=> ({
    goodPrice: state.home.goodPrice,
    highScoreData: state.home.highScoreData,
    discountData: state.home.discountData,
    recommendData: state.home.recommendData,
    longForData: state.home.longForData,
    plusData: state.home.plusData
  }), shallowEqual)

  return (
    <HomeWrapper>
      <HomeBanner/>
      <div className="content">
       <div className="discount">
          {
            discountData.dest_address?.length && <SectionHomeV2 objInfo={discountData}></SectionHomeV2>
          }
        </div>
        <div className="good-price">
          <SectionHomeV1 objInfo={goodPrice}></SectionHomeV1>
        </div>
        <div className="recommend">
          {
            recommendData.dest_address?.length && <SectionHomeV2 objInfo={recommendData}></SectionHomeV2>
          }
        </div>
        <div className="longfor">
          {longForData.list?.length && <SectionLongFor objInfo={longForData}></SectionLongFor>}
        </div>
        <div className="high-score">
          <SectionHomeV1 objInfo={highScoreData}></SectionHomeV1>
        </div>
        <div className="plus">
          {plusData.list?.length && <SectionPlus objInfo={plusData}></SectionPlus>}
        </div>
      </div>
    </HomeWrapper>
  )
})

export default Home
