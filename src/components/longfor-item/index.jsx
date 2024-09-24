import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style.js'

const LongforIem = memo((props) => {
    const { itemData } = props;

    return (
        <ItemWrapper>
            <div className="inner">
                <div className="item-info">
                    <img className="cover" src={itemData.picture_url} alt="" />
                    <div className="bg-cover"></div>
                    <div className="info">
                        <div className="city">{itemData.city}</div>
                        <div className="price">均价 {itemData.price}</div>
                    </div>
                </div>
            </div>
        </ItemWrapper>
    )
})

LongforIem.propTypes = {
    itemData: PropTypes.object
}

export default LongforIem