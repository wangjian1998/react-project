import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/createAction'
import EntireRooms from './c-cpns/entire-rooms'
import EntirePag from './c-cpns/entire-pagination'
import { headConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  window.scrollTo(0,0)
  const {roomList, totalCount, currentPage} = useSelector((state) => ({
    roomList:state.entire.roomList,
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage
   }
  ), shallowEqual)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchRoomListAction())
    dispatch(headConfigAction({isFixed: true}))
  },[dispatch])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms roomList={roomList} totalCount={totalCount}></EntireRooms>
      { !!roomList.length &&<EntirePag totalCount={totalCount} currentPage={currentPage}/>}
    </EntireWrapper>
  )
})

export default Entire
 