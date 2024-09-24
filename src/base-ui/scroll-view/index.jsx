import PropTypes from 'prop-types'
import React, { memo, useState, useEffect, useRef } from 'react'
import { ViewWrapper } from './style';
import IconArrowRight from '@/assets/svg/icon-arrow-right.jsx';
import IconArrowLeft from '@/assets/svg/icon-arrow-left.jsx';

// 这个组件主要是左右移动动画的
const ScrollView = memo((props) => {
    // 定义内部的状态
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(false);
    const [posIndex, setPosIndex] = useState(0);
    const totalDistanceRef = useRef();

    // 组件渲染完毕，判断是否显示右侧的按钮
    const scrollContentRef = useRef();
    /* 
        第二个参数相当于vue的watch，给一个空数组表示只监听一次，不给参数则每次都执行
        也可以监听某个变量发生了变化就会执行该函数
    */
    useEffect(() => {
        // scrollwidth表示可滚动的宽度
        const scrollWidth = scrollContentRef.current.scrollWidth;

        // clientWidth表示本身占据的宽度
        const clicentWidth = scrollContentRef.current.clientWidth;

        // 可视的宽度
        const totalDistance = scrollWidth - clicentWidth;

        totalDistanceRef.current = totalDistance;
        // 如果可视宽度 > 0 则把宽度赋值给响应式变量
        setShowRight(totalDistance > 0);;
    }, props.children)

    // 事件处理函数的逻辑
    // 左右按钮
    const controlClickHandle = (isRight) => {
        // 获取索引值
        const newIndex = isRight ? posIndex + 1 : posIndex - 1;
        // 获取可视的标签最左边的
        const newEl = scrollContentRef.current.children[newIndex];
        // 获取该标签最左边到父标签的最左边的距离
        const newElOffsetLeft = newEl.offsetLeft;
        // 开始赋值移动标签
        scrollContentRef.current.style.transform = `translateX(-${newElOffsetLeft}px)`
        // 记录索引
        setPosIndex(newIndex);

        // 是否显示右侧按钮
        setShowRight(totalDistanceRef.current > newElOffsetLeft);

        // 是否显示左侧按钮
        setShowLeft(newElOffsetLeft > 0);
    }

    return (
        <ViewWrapper>
            {showLeft && (
                <div className='control left' onClick={e => controlClickHandle(false)}>
                    <IconArrowLeft></IconArrowLeft>
                </div>
            )}
            {showRight && (
                <div className="control right" onClick={e => controlClickHandle(true)}>
                    <IconArrowRight></IconArrowRight>
                </div>
            )}

            {/* 插槽 */}
            <div className="scroll">
                <div className="scroll-content" ref={scrollContentRef}>
                    {props.children}
                </div>
            </div>
        </ViewWrapper>
    )
})

ScrollView.propTypes = {}

export default ScrollView