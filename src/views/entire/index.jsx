import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { fetchEntireDataAction } from '@/store/modules/entire';
import { EntirWrapper } from './style'
import EntireFilter from './c-cpns/entire-filter';
import EntireRooms from './c-cpns/entire-room';
import EntirePagination from './c-cpns/entire-pagination';

const Entire = memo(() => {
  // 从redux中获取数据
  // const { 
  //   currentPage = 0,
  //   roomList = [],
  //   totalCount = 0
  //  } = useSelector((state) => ({
  //   // 这里是上面定义的变量，然后接收redux仓库的数据
  //   currentPage: state.entire.currentPage,
  //   roomList: state.entire.roomList,
  //   totalCount: state.entire.totalCount
  // }), shallowEqual)

  // 发送网络请求，获取数据 useEffect模拟开始生命周期
  const dispatch = useDispatch();
  // 监听dispatch变化
  useEffect(() => {
    // fetchEntireDataAction能接收参数，参数都是api需要用到的参数
    dispatch(fetchEntireDataAction());
  }, [dispatch])

  return (
    <EntirWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntirWrapper>
  )
})

export default Entire