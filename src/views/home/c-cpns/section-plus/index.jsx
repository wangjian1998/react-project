import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PlusWrapper } from './style'
import SectionHeader from '@/components/section-header'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scroll-view'
import SectionFooter from '@/components/section-footer'

const SectionPlus = memo((props) => {
  const {objInfo} = props
  return (
    <PlusWrapper>
      <SectionHeader title={objInfo.title} subTitle={objInfo.subtitle}/>
      <ScrollView>
          {
            objInfo.list.map(item => {
              return (
              <RoomItem key={item.id} itemData={item} itemWidth='33.33%'></RoomItem>
              )
            })
          }
      </ScrollView>
      <SectionFooter />
    </PlusWrapper>
  )
})

SectionPlus.propTypes = {
  objInfo: PropTypes.object
}

export default SectionPlus
