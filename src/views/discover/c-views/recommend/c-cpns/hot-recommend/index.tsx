import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

import AreaHeaderV1 from '@/components/area-header-v1'
import { RecommendWrapper } from './style'
import { useAppSelector } from '@/store'
import SongMenuReact from '@/components/song-menu-item'
interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )
  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item) => {
          return <SongMenuReact key={item.id} itemData={item} />
        })}
      </div>
    </RecommendWrapper>
  )
}
export default memo(HotRecommend)
