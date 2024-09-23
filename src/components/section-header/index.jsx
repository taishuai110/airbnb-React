import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HeaderWrapper } from './style';

const SectionHeader = memo((props) => {
    // 接收父组件传递过来的内容
    const { title, subtitle } = props;

    return (
        <HeaderWrapper className='color-reset-textColorSecondary'>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            {
                subtitle && <h2 className="text-base mb-5">{subtitle}</h2>
            }
        </HeaderWrapper>
    )
})

// 这个是负责封装组件要传递进来的参数
SectionHeader.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}

export default SectionHeader