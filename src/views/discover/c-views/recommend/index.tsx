import React, { memo, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import hyRequest from '@/service'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  const [count, setCount] = useState(0)
  //测试网络请求
  useEffect(() => {
    hyRequest.get({ url: '/banner' }).then((res) => {
      console.log(res)
    })
  }, [])
  return <div>Recommend</div>
}
export default memo(Recommend)
