import React, { memo, useEffect } from 'react'
import { DetailWrapper } from './style'
import DetailPicture from './detail-picture'
import { useDispatch } from 'react-redux'
import { headConfigAction } from '@/store/modules/main'

const Detail = memo(() => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(headConfigAction({isFixed: false, topAlpha: false}))
  }, [dispatch])
  
  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
    </DetailWrapper>
  )
})

export default Detail
