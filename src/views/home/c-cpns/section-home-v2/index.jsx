import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import {HomeV2Wrapper} from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import SectionFooter from '@/components/section-footer'

const SectionHomeV2 = memo((props) => {
  const {objInfo} = props

  const tabNames = objInfo.dest_address.map(item => item.name)
  const [currentName, setCurrentName] = useState(tabNames[0])

  const tabClickHandle = useCallback(function (name) {
    setCurrentName(name)
  }, [])
  return (
    <HomeV2Wrapper>
      <SectionHeader title={objInfo.title} subTitle={objInfo.subtitle}/>
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}/>
      <SectionRooms roomList={objInfo.dest_list[currentName]} itemWidth='33.33%'></SectionRooms>
      <SectionFooter title={currentName}/>
    </HomeV2Wrapper>
  )
})

SectionHomeV2.propTypes = {
  objInfo: PropTypes.object
}

export default SectionHomeV2
