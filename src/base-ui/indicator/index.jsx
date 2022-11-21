import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IWrapper } from './style'

const Indicator = memo((props) => {
  const {selectIndex} = props
  const contentRef = useRef()

  useEffect(()=> {
    const totalWidth = contentRef.current.clientWidth // 当前区域可视宽度
    const itemWidth = contentRef.current.children[selectIndex].clientWidth // item自身宽度
    const itemLeft = contentRef.current.children[selectIndex].offsetLeft  // item距离可视div左侧距离
    const scrollWidth = contentRef.current.scrollWidth
    let needScrollWidth = itemLeft + itemWidth/2 - totalWidth/2 //需要滚动的距离
    if (needScrollWidth < 0) needScrollWidth = 0 //左边特殊情况处理
    if (needScrollWidth > scrollWidth - totalWidth) needScrollWidth = totalWidth // 右边情况处理
    contentRef.current.style.transform = `translate(${-needScrollWidth}px)`

  },[selectIndex])
  return (
    <IWrapper>
      <div className="i-content" ref={contentRef}>
        {props.children}
      </div>
    </IWrapper>
  )
})

Indicator.propTypes = {
  selectIndex: PropTypes.number
}

export default Indicator
