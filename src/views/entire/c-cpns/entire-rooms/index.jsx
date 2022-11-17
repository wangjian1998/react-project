import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper } from './style'
import RoomItem from '@/components/room-item'
import { shallowEqual, useSelector } from 'react-redux'

const EntireRooms = memo((props) => {
  const {roomList, totalCount} = props
  const {isLoading} = useSelector(state => ({isLoading: state.entire.isLoading}), shallowEqual)
  return (
    <RoomWrapper>
      <h2 className='title'>共{totalCount}住处</h2>
     <div className="list">
     {
        roomList.map(item => {
          return (
            <RoomItem key={item._id} itemData={item} itemWidth="20%"></RoomItem>
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
