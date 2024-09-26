import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';

import { ItemWrapper } from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left.jsx';
import IconArrowRight from '@/assets/svg/icon-arrow-right.jsx';
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
    const { itemData, itemWidth = "25%", itemClick } = props;
    const [selectIndex, setSelectIndex] = useState(0);

    const sliderRef = useRef();

    // 事件处理的逻辑 左右移动
    const controlClickHandle = (isNext = true, event) => {
        // 要不是调右边api，要不就调用左边api
        isNext ? sliderRef.current.next() : sliderRef.current.prev();

        // 最新的索引
        let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
        const length = itemData.picture_urls.length;
        if (newIndex < 0) newIndex = length - 1;
        if (newIndex > length - 1) newIndex = 0;
        setSelectIndex(newIndex);

        // 阻止事件冒泡
        event.stopPropagation();
    }

    const itemClickHandle = () => {
        // 调用父组件传递过来的函数
        if(itemClick) itemClick(itemData);
    }

    // 子元素的赋值
    const pictureElement = (
        <div className='cover relative box-border rounded overflow-hidden'>
            <img className='absolute left-0 top-0 w-full h-full object-cover' src={itemData.picture_url} alt="" />
        </div>
    )

    const sliderElement = (
        <div className="swiper">
            <div className="control">
                <div className="btn left" onClick={e => controlClickHandle(false, e)}>
                    <IconArrowLeft width="30" height="30"></IconArrowLeft>
                </div>
                <div className="btn right" onClick={e => controlClickHandle(true, e)}>
                    <IconArrowRight width="30" height="30"></IconArrowRight>
                </div>
            </div>
            <div className="indicator">
                <Indicator selectIndex={selectIndex}>
                    {
                        itemData?.picture_urls?.map((item, index) => {
                            return (
                                <span className='dot-item' key={index}>
                                    <span className={classNames("dot", { active: selectIndex === index })}></span>
                                </span>
                            )
                        })
                    }
                </Indicator>
            </div>
            <Carousel dots={false} ref={sliderRef}>
                {
                    itemData?.picture_urls?.map(item => {
                        return (
                            <div className="cover relative box-border rounded overflow-hidden" key={item}>
                                <img className="absolute left-0 top-0 w-full h-full object-cover" src={item} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )

    return (
        // verifColor是把服务器的css样式传递过去
        <ItemWrapper 
            $itemwidth={itemWidth} 
            $verifycolor={itemData.verify_info.text_color || "#39576a"} 
            className="p-2 box-border"
            onClick={ itemClickHandle } 
        >
            <div className='inner w-full'>
                { !itemData.picture_urls ? pictureElement : sliderElement }
                <div className="desc ml-2.5 mr-1.5 text-xs font-blod">
                    {
                        itemData.verify_info.messages.join(" . ")
                    }
                </div>
                {/* text-ellipsis文本溢出出现省略号 */}
                <div className="name text-base font-bold overflow-hidden text-ellipsis">
                    {
                        itemData.name
                    }
                </div>
                <div className="price my-2" >
                    ￥/{itemData.price}/晚
                </div>

                <div className="bottom flex items-center text-sm font-semibold text-textColor-primaryColor">
                    {/* sx可以设置样式 ?? 左边为undeifned或null时 */}
                    <Rating
                        value={itemData.star_rating ?? 5}
                        precision={0.1}
                        readOnly
                        size="small"
                        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
                    ></Rating>
                    <span className="count mr-0.5 ml-1">{itemData?.reviews_count}</span>
                    {
                        itemData?.bottom_info && <span className="extra">·{itemData?.bottom_info?.content}</span>
                    }
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object,
    itemWidth: PropTypes.string
}

export default RoomItem