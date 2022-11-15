import PropTypes from 'prop-types'
import React, { memo } from 'react'
import{HomeV1Wrapper} from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'

const SectionHomeV1 = memo((props) => {
  const {objInfo} = props
  return (
    <HomeV1Wrapper>
      <SectionHeader title={objInfo.title}/>
      <SectionRooms roomList={objInfo.list} subTitle={objInfo.subtitle || ''}></SectionRooms>
    </HomeV1Wrapper>
  )
})

SectionHomeV1.propTypes = {
  objInfo: PropTypes.object
}

export default SectionHomeV1
