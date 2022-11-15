import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const {tabNames = [], tabClick} = props
  const[currentIndex, setCurrentIndex] = useState(0)

  function itemClickHandle(index, item) {
    setCurrentIndex(index)
    tabClick(item)
  }

  return (
    <TabsWrapper>
      <ul className='tabWrapper'>
        {
          tabNames.map((item, index) => {
            return (
              <li className={classNames('tablist', {active: index===currentIndex})} onClick={e => itemClickHandle(index, item)} key={item}>{item}</li>
            )
          })
        }
      </ul>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs
