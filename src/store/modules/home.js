import { getHomeData } from '@/services'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const getGoodPriceAction = createAsyncThunk('featchGoodPrice', async () => {
  const res = await getHomeData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {}
  },
  reducers: {
    
  },
  extraReducers: {
    [getGoodPriceAction.fulfilled](state, {payload}) {
      console.log(payload)
      state.goodPrice = payload
    }
  }
})

export default homeSlice.reducer
