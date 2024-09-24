import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { SingerWrapper } from './style'
import { useAppSelector } from '@/store'
import AreaHeaderV2 from '@/components/area-header-v2'
import { getImageUrlSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
}

const SettleSinger: FC<IProps> = () => {
  const { articleList } = useAppSelector((state) => ({
    articleList: state.recommend.articleList
  }))
  return (
    <SingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看全部&gt;"
        moreLink="#/discover/artist"
      ></AreaHeaderV2>
      <div className="artists">
        {articleList.map((item) => {
          return (
            <a key={item.id} className="item" href="#/discover/artist">
              <img src={getImageUrlSize(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="name">{item.alias.join('')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  )
}
export default memo(SettleSinger)
