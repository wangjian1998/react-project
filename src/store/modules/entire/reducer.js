import * as actionTypes from './contants'

const initState = {
  currentPage: 0, // 当前页码
  roomList: [], // 房间列表
  totalCount: 0, // 总数据数量
  isLoading: false
}
function reducer(state=initState, action) {
  switch(action.type){
    case actionTypes.CHANGE_CURRENT_PAGE:
      console.log({...state, currentPage: action.currentPage})
      return {...state, currentPage: action.currentPage}
    case actionTypes.CHANGE_ROOM_LIST:
      return {...state, roomList: action.roomList}
    case actionTypes.CHANGE_TOTAL_COUNT:
      return {...state, totalCount: action.totalCount}
    case actionTypes.CHANGE_ISLOADING:
      return {...state, isLoading: action.isLoading}
    default:
      return state
  }
}

export default reducer
