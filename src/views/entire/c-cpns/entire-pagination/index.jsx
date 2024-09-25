import PropTypes from 'prop-types'
import React, { memo } from 'react'
import Pagination from '@mui/material/Pagination';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { PaginationWrapper } from './style'
import { fetchEntireDataAction, changeCurrentPage } from '@/store/modules/entire';

const EntirePagination = memo((props) => {
  // 调用dispatch
  const dispatch = useDispatch();

  const {
    totalCount = 0,
    currentPage = 0,
    roomList = []
  } = useSelector((state) => ({
    // 这里是上面定义的变量，然后接收redux仓库的数据
    totalCount: state.entire.totalCount,
    currentPage: state.entire.currentPage,
    roomList: state.entire.roomList
  }), shallowEqual)

  // 向上取整 比如 305 / 20 = 16 而不是 = 15
  const totalPage = Math.ceil(totalCount / 20); 
  const startCount = currentPage * 20 + 1;
  const endCount = (currentPage + 1) * 20;

  // 事件处理的逻辑
  const pageChangeHandle = (event, pageCount) => {
    // 回到顶部
    window.scrollTo(0, 0);

    // 重新调用redux
    dispatch(fetchEntireDataAction(pageCount - 1));
  }

  return (
    <PaginationWrapper>
      {
        // !! 表示把 0 转为 boolean值
        !!roomList.length && (
          <div className="info">
            {/* count表示总页数 */}
            <Pagination count={ totalPage } color="primary" onChange={ pageChangeHandle }></Pagination>
            <div className="desc">
              第{startCount} - {endCount}个房源，共超过{totalCount}个
            </div>
          </div>
        )
      }
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination