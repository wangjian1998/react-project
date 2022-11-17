import { getHomeData, getHomehighScoreData, getDisCountData, getRecommendData, getLongForData } from '@/services'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


export const getGoodPriceAction = createAsyncThunk('featchGoodPrice', async () => {
  const res = await getHomeData()
  return res
})

export const getHighScoreDataAction = createAsyncThunk('FetchHighScore', async () => {
  const res = await getHomehighScoreData()
  return res
})

export const getDisCountDataAction = createAsyncThunk('FetchDisCount', async () => {
  const res = await getDisCountData()
  return res
})

export const getRecommendDataAction = createAsyncThunk('FetchRecommend', async () => {
  const res = await getRecommendData()
  return res
})


export const getLongForDataAction = createAsyncThunk('FetchLongFor', async () => {
  const res = await getLongForData()
  return res
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    goodPrice: {},
    highScoreData: {},
    discountData: {},
    recommendData: {},
    longForData: {}
  },
  reducers: {
    
  },
  extraReducers: {
    [getGoodPriceAction.fulfilled](state, {payload}) {
      state.goodPrice = payload
    },
    [getHighScoreDataAction.fulfilled](state, {payload}) {
      state.highScoreData = payload
    },
    [getDisCountDataAction.fulfilled](state, {payload}) {
      state.discountData = payload
    },
    [getRecommendDataAction.fulfilled](state, {payload}) {
      state.recommendData = payload
    },
    [getLongForDataAction.fulfilled](state, {payload}) {
      console.log(payload)
      state.longForData = payload
    }
  }
})

export default homeSlice.reducer
