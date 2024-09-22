import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { AlbumItemWrapper } from './style'
import { getImageUrlSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  itemData?: any
}

const NewAlbumItem: FC<IProps> = (props) => {
  const { itemData } = props
  return (
    <AlbumItemWrapper>
      <div className="cover">
        <img src={getImageUrlSize(itemData.picUrl, 100)} alt="" />
        <a className="cover sprite_cover" href=""></a>
      </div>
      <div className="bottom">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  )
}
export default memo(NewAlbumItem)
