import PropTypes from 'prop-types'
import React, { memo } from 'react'

import styleStrToObj from './utils'

const IconClose = memo((props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={styleStrToObj("height: 2em; width: 2em; display: block; fill: rgb(255, 255, 255);")} viewBox="0 0 512 512"><path fill="#fff" d="m289.94 256l95-95A24 24 0 0 0 351 127l-95 95l-95-95a24 24 0 0 0-34 34l95 95l-95 95a24 24 0 1 0 34 34l95-95l95 95a24 24 0 0 0 34-34Z" /></svg>
    )
})

IconClose.propTypes = {}

export default IconClose