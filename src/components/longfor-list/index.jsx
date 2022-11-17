import PropTypes from 'prop-types'
import React, { memo } from 'react'
import LongforWrapper from './style'
import LongforItem from '../longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const LongforList = memo((props) => {
  const {longforList} = props
  return (
    <LongforWrapper className="longfor-list">
      <ScrollView>
        {
          longforList?.map(item => {
            return(
              <LongforItem itemData={item} key={item.city}></LongforItem>
            )
          })
        }
      </ScrollView>
    </LongforWrapper>
  )
})

LongforList.propTypes = {
  longforList: PropTypes.array
}

export default LongforList
