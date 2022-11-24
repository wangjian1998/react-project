import React, { memo } from 'react'
import {useRoutes} from 'react-router-dom'
import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import { shallowEqual, useSelector } from 'react-redux'


const App = memo(() => {

  const {headerConfig} = useSelector(state => ({
    headerConfig: state.main.headerConfig
  }), shallowEqual)
  return (
    <div>
      <div className='header'>
        <AppHeader/>
      </div>
      <div className="content" style={{marginTop: headerConfig.isFixed ? '80px' : '0'}}>
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <AppFooter></AppFooter>
      </div>
    </div>
  )
})

export default App
