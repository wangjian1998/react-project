import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ItemWrapper from './style'
import Rating from '@mui/material/Rating';

const RoomItem = memo((props) => {
  const {itemData} = props
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color || '#39576a'}>
      <div className="inner">
        <div className="image">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>{itemData.verify_info.messages.join(' · ')}</div>
        <div className='name'>{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="ratng">
          <Rating value={itemData.star_rating ?? 5} precision={0.1} readOnly sx={{fontSize:'10px', color: itemData.star_rating_color}}></Rating>
          <span className='reviews_count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && <span className='extra' style={{fontSize: itemData.bottom_info.font_size + 'px' || '10px', color: itemData.bottom_info.content_color || '#767676'}}> · {itemData.bottom_info.content}</span>
          }
          
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem
