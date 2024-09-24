import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item';
import { RoomsWrapper } from './style';

const SectionRooms = memo((props) => {
    const { roomList = [], itemWidth } = props;

    return (
        <RoomsWrapper className='flex flex-wrap mx-opposite '>
            {
                // slice(0, 8) 从0开始，8结束，表示只展示前八条数据
                roomList?.slice(0, 8).map(item => {
                    return <RoomItem itemData={item} key={item.id} itemWidth={ itemWidth }></RoomItem>
                })
            }
        </RoomsWrapper>
    )
})

SectionRooms.propTypes = {
    roomList: PropTypes.array,
    itemWidth: PropTypes.string
}

export default SectionRooms