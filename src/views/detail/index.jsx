import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import DetailInfos from './c-cpns/detail-infos';
import DetailPictures from './c-cpns/detail-pictures';
import { DetailWrapper } from './style';
import AppHeader from '@/components/app-header'
import { changeHeaderConfigAction } from '@/store/modules/main';

const Detail = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }))
  }, [dispatch])

  return (
    <DetailWrapper>
      <AppHeader></AppHeader>
      <DetailInfos></DetailInfos>
      <DetailPictures></DetailPictures>
    </DetailWrapper>
  )
})

export default Detail