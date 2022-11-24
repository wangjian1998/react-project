import React, { memo, useRef, useState } from 'react'
import {HeaderWrapper, SearchAreaWrapper} from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { useSelector, shallowEqual } from 'react-redux'
import ClassNames from 'classnames'
import useScrollPosition from '@/hooks/useScrollPosition'

const AppHeader = memo(() => {

  const [isSearch, setIsSearch] = useState(false)

  const {headerConfig} = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  const {isFixed} = headerConfig

  // 获取屏幕滚动值
  const {scrollY} = useScrollPosition()
  const prevY = useRef()
  // 在正常情况下（搜索框没有弹出），不断记录值
  if(!isSearch) prevY.current = scrollY
  // 在弹出搜索功能情况下，滚动的距离大于之前记录距离的30
  if(isSearch && Math.abs(scrollY - prevY.current) > 30) setIsSearch(false)
  return (
    <HeaderWrapper className={ClassNames({fixed: isFixed})}>
      <div className="content">
        <div className="top">
          <HeaderLeft></HeaderLeft>
          <HeaderCenter isSearch={isSearch} showSearch={e=>setIsSearch(true)}></HeaderCenter>
          <HeaderRight></HeaderRight>
        </div>
        <SearchAreaWrapper isSearch={isSearch}></SearchAreaWrapper>
      </div>
      {isSearch && <div className="cover" onClick={e=>setIsSearch(false)}></div>}
    </HeaderWrapper>
  )
})

export default AppHeader
