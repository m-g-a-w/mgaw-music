import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  console.log('c-views')
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/artist">主播电台</Link>
        <Link to="/discover/album">新碟上架</Link>
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
export default memo(Discover)
