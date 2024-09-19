import { useAppSelector } from '@/store'
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { current } from '@reduxjs/toolkit'

interface IProps {
  children?: ReactNode
}

const TopBanner: FC<IProps> = () => {
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  // const bgImage =
  //   banners[currentIndex] &&
  //   banners[currentIndex].imageUrl + '?imageView&blur=40×20'
  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={1000}>
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.encodeId}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
      </div>
      <BannerRight></BannerRight>
      <BannerControl></BannerControl>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
