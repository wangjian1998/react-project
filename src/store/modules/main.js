import {createSlice} from '@reduxjs/toolkit'

const mainReducer = createSlice({
  name: 'mainReducer',
  initialState: {
    headerConfig: {
      isFixed: false
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
