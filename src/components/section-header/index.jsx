import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const {title, subTitle='默认子标题'} = props
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {
        subTitle&&<div className="subtitle">{subTitle}</div>
      }
    </HeaderWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}

export default SectionHeader
