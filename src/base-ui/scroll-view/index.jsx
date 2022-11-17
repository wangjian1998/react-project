import React, { memo, useState, useEffect, useRef } from 'react'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {

  const [showRightBtn, setShowRightBtn] = useState(false)
  const [showLeftBtn, setShowLeftBtn] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const ScrollContent = useRef()
  const totalDistanceRef = useRef()

  useEffect(()=>{
    const scrollWidth = ScrollContent.current.scrollWidth
    const clientWidth = ScrollContent.current.clientWidth
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRightBtn(totalDistance > 0)
  },[props.children])

   function controlClickHandle(isRight) {
    const newIndex = isRight?posIndex + 1:posIndex - 1
    const newEle = ScrollContent.current.children[newIndex]
    const newOffsetLeft = newEle.offsetLeft
    ScrollContent.current.style.transform = `translate(-${newOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRightBtn(totalDistanceRef.current > newOffsetLeft)
    setShowLeftBtn(newOffsetLeft > 0)
   }
  return (
    <ViewWrapper>
      {showLeftBtn && (
        <div className='control left' onClick={e => controlClickHandle(false)}>
          <IconArrowLeft />
        </div>)}
      {showRightBtn && (
        <div className='control right' onClick={e => controlClickHandle(true)}>
          <IconArrowRight />
        </div>)}
        <div className="scroll">
          <div className="scroll-content" ref={ScrollContent}>
            {props.children}
          </div>
        </div>
    </ViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView
