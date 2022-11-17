import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforList from '@/components/longfor-list'

const SectionLongFor = memo((props) => {
  const {objInfo} = props
  return (
    <LongForWrapper>
      <SectionHeader title={objInfo.title} subTitle={objInfo.subtitle}/>
      <LongforList longforList={objInfo.list}></LongforList>
    </LongForWrapper>
  )
})

SectionLongFor.propTypes = {
  objInfo: PropTypes.object
}

export default SectionLongFor
