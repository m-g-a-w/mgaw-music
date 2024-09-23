import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail
} from '../service/recommend'

export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(changeBannerAction(res.banners))
  }
)
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(changeHotRecommendAction(res.result))
  }
)
export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbum',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(changeNewAlbumAction(res.albums))
  }
)
const rankingIds = [19723756, 3779629, 2884035]
export const fetchRankingDataAction = createAsyncThunk(
  'rankingData',
  async (arg, { dispatch }) => {
    // 1.每个请求单独处理
    // for (const id of rankingIds) {
    //   getPlayListDetail(id).then((res) => {
    //     switch (id) {
    //       case 19723756:
    //         console.log('飙升榜')
    //         break
    //       case 3779629:
    //         console.log('新歌榜')
    //         break
    //       case 2884035:
    //         console.log('原创榜')
    //         break
    //     }
    //   })
    // }
    // 2.将三个结果都拿到，统一放到一个数组中管理
    const promise: Promise<any>[] = []
    for (const id of rankingIds) {
      promise.push(getPlayListDetail(id))
    }
    //有正确顺序
    Promise.all(promise).then((res) => {
      const playList = res.map((item) => item.playlist)
      dispatch(changeRankingsAction(playList))
    })
  }
)
interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  // upRaning: any
  // newRanking: any
  // originRanking: any
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: []
  // upRaning: {},
  // newRanking: {},
  // originRanking: {}
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changeBannerAction(state, { payload }) {
      state.banners = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload
    },
    changeNewAlbumAction(state, { payload }) {
      state.newAlbums = payload
    },
    changeRankingsAction(state, { payload }) {
      state.rankings = payload
    }
  }
})
export const {
  changeBannerAction,
  changeHotRecommendAction,
  changeNewAlbumAction,
  changeRankingsAction
} = recommendSlice.actions
export default recommendSlice.reducer
