import { getHomeData, getHomehighScoreData } from '@/services'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const getGoodPriceAction = createAsyncThunk('featchGoodPrice', async () => {
  const res = await getHomeData()
  return res
})

export const getHighScoreDataAction = createAsyncThunk('FetchHighScore', async () => {
  const res = await getHomehighScoreData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScoreData: {}
  },
  reducers: {
    
  },
  extraReducers: {
    [getGoodPriceAction.fulfilled](state, {payload}) {
      console.log(payload)
      state.goodPrice = payload
    },
    [getHighScoreDataAction.fulfilled](state, {payload}) {
      console.log(payload)
      state.highScoreData = payload
    }
  }
})

export default homeSlice.reducer
