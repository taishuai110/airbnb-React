import PropTypes from 'prop-types'
import React, { createRef, memo, useEffect, useState } from 'react';
import { CSSTransition, SwitchTransition } from "react-transition-group";

import { BrowserWrapper } from './style';
import IconClose from '@/assets/svg/icon-close.jsx';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconTriangleArrowBottom from "@/assets/svg/icon-triangle-arrow-bottom";
import IconTriangleArrowTop from "@/assets/svg/icon-triangle-arrow-top";
import Indicator from '@/base-ui/indicator';
import classNames from 'classnames';

const PictureBrowser = memo((props) => {
    const { pictureUrls = [], closeClick } = props;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isNext, setIsNext] = useState(true);
    const [showList, setShowList] = useState(true);

    // 用于覆盖CSSTransition的fineDOM，预防报错
    const picTransitionRef = createRef(null);

    // 当图片浏览器展示出来时，让滚动的功能消失
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    // 事件监听的逻辑
    const closeBtnClickHandle = () => {
        // 有传入该函数才能触发
        if (closeClick) closeClick();
    }

    const controlClickHanle = (isNext = true) => {
        let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0) newIndex = pictureUrls.length - 1;
        if (newIndex > pictureUrls.length - 1) newIndex = 0;

        setCurrentIndex(newIndex);
        setIsNext(isNext);
    }

    const changeStairs = () => {
        const flag = showList;
        setShowList(!flag);
    }

    const bottomItemClickHandle = (index) => {
        // 如果传进来的index 大于 currentIndex 就是向右翻
        setIsNext(index > currentIndex);
        setCurrentIndex(index);
    }

    return (
        <BrowserWrapper $isNext={isNext} $showList={showList}>
            <div className="top">
                <div className="close-btn" onClick={closeBtnClickHandle}>
                    <IconClose></IconClose>
                </div>
            </div>
            <div className="slider">
                <div className="control">
                    <div className="btn left" onClick={e => controlClickHanle(false)}>
                        <IconArrowLeft width="77" height="77"></IconArrowLeft>
                    </div>
                    <div className="btn right" onClick={e => controlClickHanle(true)}>
                        <IconArrowRight width="77" height="77"></IconArrowRight>
                    </div>
                </div>
                <div className="container">
                    <SwitchTransition mode="in-out">
                        {/* 注意：CSSTransition的class是classNames 不是className */}
                        {/* 注意2：nodeRef这个是解决动画时的报错，但如果处理不当，也会导致动画不执行的 */}
                        <CSSTransition
                            key={pictureUrls[currentIndex]}
                            classNames="pic"
                            timeout={200}
                            nodeRef={picTransitionRef}
                        >
                            <img ref={picTransitionRef} src={pictureUrls[currentIndex]} alt="" />
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </div>
            <div className="preview">
                <div className="info">
                    <div className="desc">
                        <div className="count">
                            <span>{currentIndex + 1}/{pictureUrls.length}: </span>
                            <span>romm apartment 图片{currentIndex + 1}</span>
                        </div>
                        <div className="toggle" onClick={changeStairs}>
                            <span>{showList ? "隐藏" : "显示"}照片列表</span>
                            {showList ? <IconTriangleArrowBottom /> : <IconTriangleArrowTop />}
                        </div>
                    </div>
                    <div className="list">
                        <Indicator selectIndex={currentIndex}>
                            {
                                pictureUrls.map((item, index) => {
                                    return (
                                        <div
                                            className={classNames("item", { active: currentIndex === index })}
                                            key={item}
                                            onClick={ e => bottomItemClickHandle(index) }
                                        >
                                            <img src={item} alt="" />
                                        </div>
                                    )
                                })
                            }
                        </Indicator>
                    </div>
                </div>
            </div>
        </BrowserWrapper>
    )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser