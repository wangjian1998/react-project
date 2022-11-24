import React, { memo } from 'react'
import {HeaderWrapper} from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
import { useSelector, shallowEqual } from 'react-redux'
import ClassNames from 'classnames'

const AppHeader = memo(() => {

  const {headerConfig} = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)

  const {isFixed} = headerConfig
  return (
    <HeaderWrapper className={ClassNames({fixed: isFixed})}>
      <HeaderLeft></HeaderLeft>
      <HeaderCenter></HeaderCenter>
      <HeaderRight></HeaderRight>
    </HeaderWrapper>
  )
})

export default AppHeader
