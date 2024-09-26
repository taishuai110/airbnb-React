import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import DetailInfos from './c-cpns/detail-infos';
import DetailPictures from './c-cpns/detail-pictures';
import { DetailWrapper } from './style';

const Detail = memo(() => {
  const { detailInfo = {} } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }), shallowEqual)

  return (
    <DetailWrapper>
      <DetailInfos></DetailInfos>
      <DetailPictures></DetailPictures>
    </DetailWrapper>
  )
})

export default Detail