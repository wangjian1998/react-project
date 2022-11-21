import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import ItemWrapper from './style'
import Rating from '@mui/material/Rating';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames'

import { Carousel } from 'antd';

const RoomItem = memo((props) => {
  const {itemData, itemWidth='25%', itemClick} = props
  const carouselRef = useRef()
  const [selectIndex, setSelectIndex] = useState(0)

  function controlBtnHandle(e, isRight = true) {
    e.stopPropagation()
    isRight ? carouselRef.current.next() : carouselRef.current.prev()

    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = itemData?.picture_urls.length - 1
    if (newIndex > itemData?.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }

  function itemClickHandle() {
    if (itemClick) itemClick(itemData)
  }
  return (
    <ItemWrapper itemWidth={itemWidth} verifyColor={itemData?.verify_info?.text_color || '#39576a'} onClick={itemClickHandle}>
      <div className="inner">
        {
          !itemData.picture_urls ? (
            <div className="image">
              <img src={itemData.picture_url} alt="" />
            </div>
          ) : (
            <div className="swiper">
              <div className="control">
                <div className="btn left" onClick={e => controlBtnHandle(e, false)}>
                  <IconArrowLeft width={30} height={30} />
                </div>
                <div className="btn right" onClick={e => controlBtnHandle(e, true)}>
                  <IconArrowRight width={30} height={30}/>
                </div>
              </div>
              <div className="indicator">
                <Indicator selectIndex={selectIndex}>
                  {
                    itemData?.picture_urls?.map((item, index)=> {
                      return (
                        <div className="dot-item" key={item}>
                          <span className={classNames('dot', {active: selectIndex === index})}></span>
                        </div>
                      )
                    })
                  }
                </Indicator>
              </div>
              <Carousel dots={false} ref={carouselRef}>
                {
                  itemData?.picture_urls?.map(item => {
                    return (
                      <div className="image" key={item}>
                        <img src={item} alt="" />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
          )
        }
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
