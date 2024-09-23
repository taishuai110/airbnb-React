import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style';
import Rating from '@mui/material/Rating';

const RoomItem = memo((props) => {
    const { itemData } = props;

    return (
        // verifColor是把服务器的css样式传递过去
        <ItemWrapper verifycolor={itemData.verify_info.text_color || "#39576a"} className="w-1/4 p-2 box-border">
            <div className='inner w-full'>
                <div className="cover relative box-border rounded overflow-hidden">
                    <img className='absolute left-0 top-0 w-full h-full' src={itemData.picture_url} alt="" />
                </div>
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
                        value={ itemData.star_rating ?? 5 }
                        precision={ 0.1 }
                        readOnly
                        size="small"
                        sx={{ fontSize: "12px", color: "#00848A", marginRight: "-1px" }}
                    ></Rating>
                    <span className="count mr-0.5 ml-1">{ itemData?.reviews_count }</span>
                    {
                        itemData?.bottom_info && <span className="extra">·{ itemData?.bottom_info?.content }</span>
                    }
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem