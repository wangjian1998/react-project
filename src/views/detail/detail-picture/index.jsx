import React, { memo } from 'react'
import { PictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'

const DetailPicture = memo(() => {
  const {detailData} = useSelector(state => ({detailData: state.detail.detailData}), shallowEqual)
  return (
    <PictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item-picture">
            <img src={detailData.picture_urls[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className="right">
          {
            detailData.picture_urls.slice(1,5).map(item => {
              return (
                <div className="item-picture" key={item}>
                  <img src={item} alt={item} />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
      </div>
    </PictureWrapper>
  )
})

export default DetailPicture
