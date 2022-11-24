import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import classNames from 'classnames'
import { BrowserWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom'
import IconTriangleTop from '@/assets/svg/icon-triangle-top'
import Indicator from '../indicator'

const PicBrowser = memo((props) => {
  const {pictures, showClick} = props
  const [selectIndex, setSelectIndex] = useState(0)
  const [showList, setShowList] = useState(true)
  useEffect(() => {
    document.body.style.overflow='hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function hideClick() {
    showClick(false)
  }

  function onShowList() {
    setShowList(!showList)
  }

  function clickHandle(isNext=true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = pictures.length - 1
    if (newIndex > pictures.length - 1) newIndex = 0
    setSelectIndex(newIndex) 
  }


  return (
    <BrowserWrapper showList={showList}>
      <div className="top">
        <span className='btn' onClick={hideClick}>x</span>
      </div>
      <div className="list">
        <div className="control">
          <div className="btn left" onClick={e=>clickHandle(false)}>
            <IconArrowLeft width={77} height={77}></IconArrowLeft>
          </div>
          <div className="btn right"  onClick={e=>clickHandle(true)}>
            <IconArrowRight width={77} height={77}></IconArrowRight>
          </div>
        </div>
        <div className="container">
          <img src={pictures[selectIndex]} alt="" />
        </div>
      </div>
      <div className="indicator">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>{selectIndex + 1}/{pictures.length}:</span>
              <span>room aparment 图片{selectIndex + 1}</span>
            </div>
            <div className="toggle" onClick={onShowList}>
              <span>{showList ? '隐藏' : '显示'}图片列表</span>
              {showList && <IconTriangleBottom />}
              {!showList && <IconTriangleTop />}
            </div>
          </div>
          <div className="indicator-list">
            <Indicator selectIndex={selectIndex}>
              {
                pictures.map((item, index) => {
                  return (
                    <div className={classNames('item', {active: selectIndex===index})} key={item} onClick={e=> setSelectIndex(index)}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  )
})

PicBrowser.propTypes = {
  pictures: PropTypes.array
}

export default PicBrowser
