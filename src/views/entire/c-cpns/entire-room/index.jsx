import PropTypes from 'prop-types'
import React, { memo, useCallback } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import RoomItem from '@/components/room-item';
import { useNavigate } from 'react-router-dom';
import { changeDetailInfoAction } from '../../../../store/modules/detail';

const EntireRoom = memo((props) => {
  const {
    roomList = [],
    totalCount = 0,
    isLoading
  } = useSelector((state) => ({
    // 这里是上面定义的变量，然后接收redux仓库的数据
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading
  }), shallowEqual)

  // 事件处理
  
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const itemClickHandle = useCallback((item) => {
    // 先在栏目页中选中商品，然后把那个商品数据存储在redux中，再跳转到商品详情页
    dispatch(changeDetailInfoAction(item));
    // 跳转详情
      navigate("/detail");
  }, [navigate])

  return (
    <RoomsWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem
                itemData={item}
                itemWidth="20%"
                key={item._id}
                itemClick={ itemClickHandle }
              ></RoomItem>
            )
          })
        }
      </div>

      {/* 蒙版 */}
      {
        isLoading && <div className="cover"></div>
      }
    </RoomsWrapper>
  )
})

EntireRoom.propTypes = {}

export default EntireRoom