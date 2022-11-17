import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const {title=''} = props

  const navigate = useNavigate()
  function moreClickHandle() {
    navigate('/entire')
  }
  return (
    <FooterWrapper>
      <div className="info" onClick={moreClickHandle}>
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
