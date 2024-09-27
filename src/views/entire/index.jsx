import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { fetchEntireDataAction } from '@/store/modules/entire';
import { EntirWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter';
import EntireRooms from './c-cpns/entire-room';
import EntirePagination from './c-cpns/entire-pagination';
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main';

const Entire = memo(() => {
  // 发送网络请求，获取数据 useEffect模拟开始生命周期
  const dispatch = useDispatch();
  // 监听dispatch变化
  useEffect(() => {
    // fetchEntireDataAction能接收参数，参数都是api需要用到的参数
    dispatch(fetchEntireDataAction());
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }))
  }, [dispatch])

  return (
    <EntirWrapper>
      <AppHeader></AppHeader>

      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntirWrapper>
  )
})

export default Entire