import { useAppDispatch } from '@/store'
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'

import {
  fetchBannerDataAction,
  fetchHotRecommendAction
} from './store/recommend'
import TopBanner from './c-cpns/TopBanner'
import { RecommendWrapper } from './style'
import HotRecommend from './c-cpns/hot-recommend'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendAction())
  }, [])
  return (
    <div>
      <RecommendWrapper>
        <TopBanner />
        <div className="content wrap-v2">
          <div className="left">
            <HotRecommend />
          </div>
          <div className="right"></div>
        </div>
      </RecommendWrapper>
      recommend
    </div>
  )
}
export default memo(Recommend)
