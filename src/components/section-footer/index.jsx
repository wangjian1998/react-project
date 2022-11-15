import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const {title=''} = props
  return (
    <FooterWrapper>
      <div className="info">
        {
          title === '' ? <span className='text'>查看更多</span> : <span className='text textColor'>查看更多{title}房源</span>
        }
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  title: PropTypes.string
}

export default SectionFooter
