import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styleStrToObject from './utils'

const IconTriangleArrowBottom = memo((props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={ styleStrToObject("height: 16px; width: 16px; fill: currentColor;") } viewBox="0 0 1024 1024"><path fill="#fff" d="m192 384l320 384l320-384z" /></svg>
    )
})

IconTriangleArrowBottom.propTypes = {}

export default IconTriangleArrowBottom