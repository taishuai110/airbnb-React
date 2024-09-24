import PropTypes from 'prop-types'
import React, { memo, useState, useCallback } from 'react'

import { SectionV2Wrapper } from './style';
import SectionHeader from "@/components/section-header";
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
    const { infoData = {} } = props;

    // 获取父组件传递过来的数据的首元素
    const initialName = Object.keys(infoData.dest_list)[0];
    // 定义内部的state useState定义初始值时，只会执行第一个，后面想改变只能通过setState了
    const [childName, setChildName] = useState(initialName);
    // 数据转化然后再给子组件
    const tabNames = infoData.dest_address?.map(item => item.name);

    // 定义函数 // 性能优化 每次页面刷新，这个函数都会被重新定义，导致性能浪费
    // 用useCallback进行性能优化，让这个函数用在子组件时，每次子组件重新渲染也不会把这个函数重新定义
    // 接收子组件的参数索引跟名称
    const tabClickHandle = useCallback((index, name) => {
        setChildName(name);
    }, [])

    return (
        <SectionV2Wrapper>
            {/* 折扣数据 */}
            <div className="discount">
                <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
                <SectionTabs tabNames={tabNames} tabClick={tabClickHandle}></SectionTabs>
                <SectionRooms roomList={infoData?.dest_list?.[childName]} itemWidth="33.33333%" ></SectionRooms>
                <SectionFooter name={ childName }></SectionFooter>
            </div>
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2