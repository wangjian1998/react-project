import { getEntireData } from '@/services'
import * as actionTypes from './contants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage
})


export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeLoadingAction = (isLoading) => ({
  type: actionTypes.CHANGE_ISLOADING,
  isLoading
})

export const fetchRoomListAction = () => {
  return async (dispatch, getState) => {
    const currentPage = getState().entire.currentPage
    dispatch(changeLoadingAction(true))
    const res = await getEntireData(currentPage*20)
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
    dispatch(changeLoadingAction(false))
  }
}
