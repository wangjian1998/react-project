import React, { memo, useEffect } from 'react'
import {useLocation, useRoutes} from 'react-router-dom'
import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'


const App = memo(() => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location.pathname])
  return (
    <div>
      <div className='header'>
        <AppHeader/>
      </div>
      <div className="content" >
        {useRoutes(routes)}
      </div>
      <div className="footer">
        <AppFooter></AppFooter>
      </div>
    </div>
  )
})

export default App
