import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item';
import { RoomsWrapper } from './style';

const SectionRoos = memo((props) => {
    const { roomList = [] } = props;

    return (
        <RoomsWrapper className='flex flex-wrap mx-opposite '>
            {
                // slice(0, 8) 从0开始，8结束，表示只展示前八条数据
                roomList?.slice(0, 8).map(item => {
                    return <RoomItem itemData={item} key={item.id} ></RoomItem>
                })
            }
        </RoomsWrapper>
    )
})

SectionRoos.propTypes = {
    roomList: PropTypes.array
}

export default SectionRoos