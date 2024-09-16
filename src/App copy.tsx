import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch, useShallowEqualApp } from './store'

import routes from './router'
import { changeMessage } from './store/modules/counter'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
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
      <AppHeader></AppHeader>
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
      <h2>计数{count}</h2>
      <h2>消息{message}</h2>
      <button onClick={handleChangeMessage}></button>
    </div>
  )
}

export default App
