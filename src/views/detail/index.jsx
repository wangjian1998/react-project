import React, { memo } from 'react'
import { DetailWrapper } from './style'
import DetailPicture from './detail-picture'

const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
    </DetailWrapper>
  )
})

export default Detail
