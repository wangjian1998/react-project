import React, { memo, useState } from 'react'
import {HeaderWrapper, SearchAreaWrapper} from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { useSelector, shallowEqual } from 'react-redux'
import ClassNames from 'classnames'

const AppHeader = memo(() => {

  const [isSearch, setIsSearch] = useState(false)

  const {headerConfig} = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const {isFixed} = headerConfig
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
