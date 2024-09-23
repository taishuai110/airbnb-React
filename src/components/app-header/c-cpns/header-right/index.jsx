import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import IconAvatar from '@/assets/svg/icon_avatar';

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }

    // 开启捕获事件
    window.addEventListener('click', windowHandleClick, true);

    return () => {
      // 注销事件
      window.removeEventListener("click", windowHandleClick, true);
    }

  }, [])

  // 事件处理函数
  function profileClickHandle() {
    setShowPanel(true);
  }

  return (
    <RightWrapper className="text-textColor-primaryColor">
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className="btn">
          <IconGlobal></IconGlobal>
        </span>
      </div>

      <div className="profile text-textColor-secondaryColor" onClick={profileClickHandle}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>

        {
          showPanel && (
            <div className="panel">
              <div className="top">
                <div className="item register">登录</div>
                <div className="item login">注册</div>
              </div>
              <div className="bottom">
                <div className="item">出租房源</div>
                <div className="item">开展体验</div>
                <div className="item">帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight