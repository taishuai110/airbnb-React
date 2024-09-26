import PropTypes from 'prop-types'
import React, { memo, useRef, useEffect } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
    const { selectIndex = 0 } = props;
    const contentRef = useRef();

    // 组件渲染完后，监听selectIndex是否发生改变
    useEffect(() => {
        // 获取selectIndex对应的item
        const selectItemEl = contentRef.current.children[selectIndex];

        // 计算距离
        const itemLeft = selectItemEl.offsetLeft;
        const itemWidth = selectItemEl.clientWidth;
        
        // 获取content的宽度
        const contentWidth = contentRef.current.clientWidth;
        const contentScroll = contentRef.current.scrollWidth;
        
        // 计算selectIndex要滚动的距离
        let distance = itemLeft + itemWidth * 0.5 - contentWidth * 0.5;

        if(distance < 0) distance = 0;  // 左边特殊情况
        const totalDistance = contentScroll - contentWidth;
        if(distance > totalDistance) distance = totalDistance  // 右边特殊情况

        // 改变位置
        contentRef.current.style.transform = `translate(${-distance}px)`;
    }, [ selectIndex ])

  return (
    <IndicatorWrapper className='overflow-hidden'>
        <div className="i-content flex relative" ref={ contentRef }>
            {
                props.children
            }
        </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
    selectIndex: PropTypes.number
}

export default Indicator