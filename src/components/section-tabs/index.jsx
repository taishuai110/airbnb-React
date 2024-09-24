import PropTypes from 'prop-types'
import React, { memo, useState } from 'react';
import classNames from 'classnames';

import { TabsWrapper } from './style';
import ScrollView from '@/base-ui/scroll-view';

const SectionTabs = memo((props) => {
    // 第二个参数是接收父组件的函数，算是把参数传递给父组件了
    const { tabNames = [], tabClick } = props;
    // 记录索引值
    const [currentIndex, setCurrentIndex] = useState(0);

    tabNames.push("abc")
    tabNames.push("efg")
    tabNames.push("obq")

    const itemClickHandle = (index, item) => {
        // 把点击到的索引值保存
        setCurrentIndex(index);
        // 把参数传递给父组件
        tabClick(index, item);
    }

    return (
        <TabsWrapper >
            <ScrollView>
                {
                    tabNames.map((item, index) => {
                        // basis设置最小宽度 
                        return (
                            // 要下载classNames库 这样才能动态选择class类标签
                            <div key={item} onClick={e => itemClickHandle(index, item)}
                                className={classNames("item", { active: index == currentIndex })}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array,
    tabClick: PropTypes.func
}

export default SectionTabs