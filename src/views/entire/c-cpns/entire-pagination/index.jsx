import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { PagWrapper } from './style'
import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { changeCurrentPageAction, fetchRoomListAction } from '@/store/modules/entire/createAction';

const EntirePag = memo((props) => {
  const {totalCount, currentPage} = props
  const dispatch = useDispatch()

  const totalPage = Math.ceil(totalCount / 20)
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20

  function handleChange(e, page) {
    // 回到浏览器顶部
    window.scrollTo(0,0)
    dispatch(changeCurrentPageAction(page-1)) // 更改state中currentPage
    dispatch(fetchRoomListAction()) // 调用网络请求
  }

  return (
    <PagWrapper>
       <Pagination count={totalPage} color="primary" onChange={handleChange} />
       <div className="info">第{startCount}-{endCount}个房源，共超过{totalCount}个</div>
    </PagWrapper>
  )
})

EntirePag.propTypes = {
  totalCount: PropTypes.number,
  currentPage: PropTypes.number
}

export default EntirePag
