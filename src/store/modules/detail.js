import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
  name: 'detailSlice',
  initialState: {
    detailData: {}
  },
  reducers: {
    changeDetailDataAction(state, {payload}) {
      state.detailData = payload
    }
  }
})

export const {changeDetailDataAction} = DetailSlice.actions
export default DetailSlice.reducer
