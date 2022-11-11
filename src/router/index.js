import {Navigate} from 'react-router-dom'
import React from 'react'

const Home = React.lazy(() => import('@/views/home'))
const Detail = React.lazy(() => import('@/views/detail'))
const Entire = React.lazy(() => import('@/views/entire'))

const routes = [
  {path: '/home', element: <Home/>},
  {path: '/detail', element: <Detail/>},
  {path: '/entire', element: <Entire/>},
  {path: '/', element: <Navigate to="/home"/>},
]

export default routes
