import React, { memo, useState } from 'react'
import { DemoWrapper } from './style'
import Indicator from '@/base-ui/indicator'

const Demo = memo((props) => {
  const demoList = ['aaa','ssss','bbb','cc','d','eded','dfg','sedr','dfcbvn','eedr5ftg','dsdsdsd']
  const [selectIndex, setSelectIndex] = useState(0)

  function clickHandle(isNext=true) {
    // let newIndex = selectIndex
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1
    if (newIndex < 0) newIndex = demoList.length - 1
    if (newIndex > demoList.length - 1) newIndex = 0
    setSelectIndex(newIndex)
    console.log(newIndex)
    
  }
  return (
    <DemoWrapper>
      <div className="btn">
        <button onClick={e => clickHandle(false)}>上一个</button>
        <button onClick={e => clickHandle(true)}>下一个</button>
      </div>
      <Indicator selectIndex={selectIndex}>
        {
          demoList.map(item => {
            return (
              <button key={item}>{item}</button>
            )
          })
        }
      </Indicator>
    </DemoWrapper>
  )
})

Demo.propTypes = {}

export default Demo
