import PropTypes from 'prop-types'
import React, { memo } from 'react'
import styleStrToObject from './utils'

const IconTriangleArrowTop = memo((props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style={ styleStrToObject("height: 16px; width: 16px; fill: currentcolor;") } viewBox="0 0 15 15"><path fill="#fff" d="M7.5 4.793L3.293 9h8.414z" /></svg>
    )
})

IconTriangleArrowTop.propTypes = {}

export default IconTriangleArrowTop