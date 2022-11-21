import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { RoomWrapper } from './style'
import RoomItem from '@/components/room-item'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeDetailDataAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const {roomList, totalCount} = props
  const {isLoading} = useSelector(state => ({isLoading: state.entire.isLoading}), shallowEqual)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const itemClick = useCallback((data)=> {
    dispatch(changeDetailDataAction(data))
    navigate('/detail')
  }, [navigate, dispatch])
  return (
    <RoomWrapper>
      <h2 className='title'>共{totalCount}住处</h2>
     <div className="list">
     {
        roomList.map(item => {
          return (
            <RoomItem key={item._id} itemData={item} itemWidth="20%" itemClick={itemClick}></RoomItem>
          )
        })
      }
     </div>
     {isLoading && <div className="cover"></div>}
    </RoomWrapper>
  )
})

EntireRooms.propTypes = {
  roomList: PropTypes.array
}

export default EntireRooms
