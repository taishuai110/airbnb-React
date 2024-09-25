import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom';

import { LeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo';

const HeaderLeft = memo(() => {

  const navigate = useNavigate();
  const logoClickHandle = () => {
    navigate("/home")
  }

  return (
    <LeftWrapper className='text-root-primaryColor'>
      <div className='logo' onClick={ logoClickHandle }>
        <IconLogo></IconLogo>
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft