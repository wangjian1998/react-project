import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LItemWrapper } from './style'

const LongforItem = memo((props) => {
  const {itemData} = props
  return (
    <LItemWrapper>
       {/* <div className='list-item' key={itemData.city}> */}
          <img src={itemData.picture_url} alt="" />
          <div className="info">
            <div className="city">{itemData.city}</div>
            <div className="price">{itemData.price}</div>
          </div>
        {/* </div> */}
    </LItemWrapper>
  )
})

LongforItem.propTypes = {
  itemData: PropTypes.object
}

export default LongforItem
