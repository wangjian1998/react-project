import {createSlice} from '@reduxjs/toolkit'

const mainReducer = createSlice({
  name: 'mainReducer',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers: {
    headConfigAction(state, {payload}){
      state.headerConfig = payload
    }
  }
})

export const {headConfigAction} = mainReducer.actions
export default mainReducer.reducer
