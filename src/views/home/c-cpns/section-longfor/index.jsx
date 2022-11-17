import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'

const SectionLongFor = memo((props) => {
  const {objInfo} = props
  return (
    <LongForWrapper>
      <SectionHeader title={objInfo.title} subTitle={objInfo.subtitle}/>
      {/* {objInfo.list?.length&&<LongforList longforList={objInfo.list}></LongforList>} */}
      <ScrollView>
        {
          objInfo.list.map(item => {
            return(
              <LongforItem itemData={item} key={item.city}></LongforItem>
            )
          })
        }
      </ScrollView>
    </LongForWrapper>
  )
})

SectionLongFor.propTypes = {
  objInfo: PropTypes.object
}

export default SectionLongFor
