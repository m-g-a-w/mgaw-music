import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import AreaHeaderV2 from '@/components/area-header-v2'
import { AnchorWrapper } from './style'
import { hotRadios } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotAnchor: FC<IProps> = () => {
  return (
    <AnchorWrapper>
      <AreaHeaderV2 title="热门主播"></AreaHeaderV2>
      <div className="anchors">
        {hotRadios.map((item) => {
          return (
            <div className="item" key={item.name}>
              <a className="image" href="">
                <img src={item.picUrl} alt="" />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </AnchorWrapper>
  )
}
export default memo(HotAnchor)
