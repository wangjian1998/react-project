import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const PicBrowser = memo((props) => {
  const {pictures, showClick} = props
  const [selectIndex, setSelectIndex] = useState(0)
  useEffect(() => {
    document.body.style.overflow='hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  function hideClick() {
    showClick(false)
  }

  function clickHandle(isNext=true) {
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = pictures.length - 1
    if (newIndex > pictures.length - 1) newIndex = 0
    setSelectIndex(newIndex)
  }


  return (
    <BrowserWrapper>
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
      <div className="indicator"></div>
    </BrowserWrapper>
  )
})

PicBrowser.propTypes = {
  pictures: PropTypes.array
}

export default PicBrowser
