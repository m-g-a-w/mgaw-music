import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import {
  fetchBannerDataAction,
  fetchHotRecommendAction,
  fetchNewAlbumAction,
  fetchRankingDataAction,
  fetchArticleListAction
} from './store/recommend'
import TopBanner from './c-cpns/TopBanner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
    dispatch(fetchNewAlbumAction())
    dispatch(fetchRankingDataAction())
    dispatch(fetchArticleListAction())
  }, [])
  return (
    <div>
      <RecommendWrapper>
        <TopBanner />
        <div className="content wrap-v2">
          <div className="left">
            <HotRecommend />
            <NewAlbum />
            <TopRanking />
          </div>
          <div className="right">
            <UserLogin></UserLogin>
            <SettleSinger></SettleSinger>
            <HotAnchor></HotAnchor>
          </div>
        </div>
      </RecommendWrapper>
    </div>
  )
}
export default memo(Recommend)
