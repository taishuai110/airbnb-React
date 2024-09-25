import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style';
import fileterData from '@/assets/data/filter_data.json';
import classNames from 'classnames';

const entireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  // nav点击事件
  const itemClickHandle = (item) => {
    const newItems = [...selectItems];
    // 如果该数组已经有该元素了，则删除该元素
    if (newItems.includes(item)) {
      // 获取索引值
      const itemIndex = newItems.findIndex(filterItem => filterItem === item);
      // splice删除元素
      newItems.splice(itemIndex, 1);
    } else {
      // 添加操作
      newItems.push(item);
    }
    setSelectItems(newItems);
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          fileterData.map((item, index) => {
            return (
              // includes会检查数组是否包含该元素
              <div className={classNames("item", { active: selectItems.includes(item) })} key={item} onClick={e => itemClickHandle(item)}>
                {
                  item
                }
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

entireFilter.propTypes = {}

export default entireFilter