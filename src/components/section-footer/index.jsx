import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapp } from './style';
import IconMoreArrow from '@/assets/svg/icon-more-arrow.jsx';
import { useNavigate } from 'react-router-dom';

const SectionFooter = memo((props) => {
  const { name } = props;

  let showMessage = "显示全部";
  if(name) {
    showMessage = `显示更多${name}房源`
  }

  // 事件处理的逻辑
  const navigate = useNavigate();
  const moreClickHandle = () => { 
    navigate("/entire")
  }

  return (
    <FooterWrapp color={ name ? "#00848A" : "#000" }>
      <div className="info" onClick={ moreClickHandle }>
        <div className="text">{ showMessage }</div>
        <IconMoreArrow></IconMoreArrow>
      </div>
    </FooterWrapp>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter