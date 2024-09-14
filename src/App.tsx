import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch, useShallowEqualApp } from './store'

import routes from './router'
import { changeMessage } from './store/modules/counter'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    useShallowEqualApp
  )
  // 事件处理函数
  const dispatch = useAppDispatch()

  function handleChangeMessage() {
    dispatch(changeMessage('hahaha'))
  }
  return (
    <div className="App">
      <div className="App">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>计数{count}</h2>
      <h2>消息{message}</h2>
      <button onClick={handleChangeMessage}></button>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
