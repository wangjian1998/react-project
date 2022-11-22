import React, { memo, useState } from 'react'
import { PictureWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux'
import PicBrowser from '@/base-ui/picture-browser'

const DetailPicture = memo(() => {
  const {detailData} = useSelector(state => ({detailData: state.detail.detailData}), shallowEqual)
  const [showPic, setShowPic] = useState(false)

  function showPicture(bool) {
    setShowPic(bool)
  }
  return (
    <PictureWrapper>
     {detailData && (<div className="pictures">
        <div className="left">
          <div className="item-picture">
            <img src={detailData.picture_urls?.[0]} alt="" />
            <div className='cover'></div>
          </div>
        </div>
        <div className="right">
          {
            detailData.picture_urls?.slice(1,5).map(item => {
              return (
                <div className="item-picture" key={item}>
                  <img src={item} alt={item} />
                  <div className='cover'></div>
                </div>
              )
            })
          }
        </div>
        <div className="show-btn" onClick={e => showPicture(true)}>显示图片</div>
      </div>)}
      
      {showPic && <PicBrowser pictures={detailData.picture_urls}  showClick={showPicture} />}
    </PictureWrapper>
  )
})

export default DetailPicture
