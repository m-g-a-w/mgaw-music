import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { formatCount, getImageUrlSize } from '@/utils/format'
import { MenuItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  itemData?: any
}

const SongMenuReact: FC<IProps> = (props) => {
  const { itemData } = props

  return (
    <MenuItemWrapper>
      <div className="top">
        <img src={getImageUrlSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}
export default memo(SongMenuReact)
