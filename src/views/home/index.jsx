import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style';

import HomeBanner from './c-cpns/home-banner';
import { fetchHomeDataAction } from '@/store/modules/home';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import HomeSectionV1 from './c-cpns/home-section-v1';
import HomeSectionV2 from './c-cpns/home-section-v2';
import { isEmptyObject } from '@/utlis';
import HomeLongfor from './c-cpns/home-longfor';

const Home = memo(() => {


  // 从redux中获取数据
  const { 
    goodPriceInfo = {}, 
    highScoreInfo = {}, 
    discountInfo = {}, 
    recommendInfo = {},
    longforInfo = {} 
  } = useSelector((state) => ({
    // 赋值给redux仓库
    goodPriceInfo: state.home.goodPriceInfo,
    highScoreInfo: state.home.highScoreInfo,
    discountInfo: state.home.discountInfo,
    recommendInfo: state.home.recommendInfo,
    longforInfo: state.home.longforInfo
  }), shallowEqual)

  // 发起网络请求
  const dispatch = useDispatch();

  // 只发动一次
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      
      <div className="content">
        {/* 解决useState初始值问题 即，如果还没拿到初始值，则不渲染该组件 */}
        { isEmptyObject(discountInfo) && <HomeSectionV2 infoData={ discountInfo }></HomeSectionV2> }
        { isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={ recommendInfo }></HomeSectionV2> }

        { isEmptyObject(longforInfo) &&  <HomeLongfor infoData={ longforInfo }></HomeLongfor>}

        {/* 主要优化问题，因为组件默认渲染两次，都来确定是否有数据，这样写的话，就会有数据时才会渲染，没数据就不会渲染页面，从而性能优化 */}
        { isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1> }
        { isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1> }
      </div>
    </HomeWrapper>
  )
})

export default Home