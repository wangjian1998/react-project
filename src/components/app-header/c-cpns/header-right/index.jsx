import React, { memo, useState, useEffect } from 'react'
import {RightWrapper} from './style'
import IconGlobal from '@/assets/svg/incon_global'
import IconAvater from '@/assets/svg/icon_avater'
import IconMore from '@/assets/svg/icon_more'


const HeaderRight = memo(() => {

  const [showPanel, setShowPanel] = useState(false)

  function onShowPanel() {
    setShowPanel(true)
  }

  useEffect(()=> {
    function handleClick() {
      setShowPanel(false)
    }
    window.addEventListener('click', handleClick, true)

    return () => {
      window.removeEventListener('click',handleClick, true)
    }
  }, [])

  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className="perInfo" onClick={onShowPanel}>
        <span>
          <IconMore/>
        </span>
        <span>
          <IconAvater/>
        </span>

       {showPanel && (
         <div className="panel">
          <div className="top">
            <div className="item gister">注册</div>
            <div className="item">登录</div>
          </div>
          <div className="bottom">
            <div className="item">出租房源</div>
            <div className="item">开启体验</div>
            <div className="item">帮助</div>
         </div>
       </div>
       )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
