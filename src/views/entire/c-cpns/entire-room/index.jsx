import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomsWrapper } from './style'
import { shallowEqual, useSelector } from 'react-redux';
import RoomItem from '@/components/room-item';

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

  return (
    <RoomsWrapper>
      <h2 className="title">共{ totalCount }多处住所</h2>
      <div className="list">
        {
          roomList.map(item => {
            return (
              <RoomItem itemData={item} itemWidth="20%" key={item._id}></RoomItem>
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