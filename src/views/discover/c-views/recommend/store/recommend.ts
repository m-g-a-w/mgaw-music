import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getBanners } from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    console.log(res, 'res')
    dispatch(changeBannerAction(res.banners))
  }
)

interface IRecommendState {
  banners: any[]
}
const initialState: IRecommendState = {
  banners: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchBannerDataAction.pending, (state, action) => {
  //       console.log('pending')
  //     })
  //     .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
  //       state.banners = payload
  //     })
  //     .addCase(fetchBannerDataAction.rejected, (state, action) => {
  //       console.log('rejected')
  //     })
  //    }
})
export const { changeBannerAction } = recommendSlice.actions
export default recommendSlice.reducer
