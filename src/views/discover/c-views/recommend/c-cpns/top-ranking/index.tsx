import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import AreaHeaderV1 from '@/components/area-header-v1'
import TopRankingItem from '../top-ranking-item'
import { useAppSelector } from '@/store'
import { RankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  const { rankings } = useAppSelector((state) => ({
    rankings: state.recommend.rankings
  }))
  return (
    <RankingWrapper>
      <AreaHeaderV1 title="榜单" moreLink="/discover/ranking" />
      <div className="content">
        {rankings.map((item) => {
          return <TopRankingItem key={item.id} itemData={item} />
        })}
      </div>
    </RankingWrapper>
  )
}
export default memo(TopRanking)
