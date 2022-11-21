import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

const Detail = memo(() => {

  const {detailData} = useSelector(state => ({detailData: state.detail.detailData}), shallowEqual)
  console.log(detailData)
  return (
    <div>Detail</div>
  )
})

export default Detail
