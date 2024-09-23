import React, { memo, useEffect } from 'react'
import { HomeWrapper } from './style';

import HomeBanner from './c-cpns/home-banner';
import { fetchHomeDataAction } from '@/store/modules/home';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import SectionHeader from "@/components/section-header";

import SectionRoom from '@/components/section-rooms';

const Home = memo(() => {

  // 从redux中获取数据
  const { goodPriceInfo } = useSelector((state) => ({
    // 赋值给redux仓库
    goodPriceInfo: state.home.goodPriceInfo
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
        <div className="good-price">
          <SectionHeader title={goodPriceInfo.title}></SectionHeader>
          
          <SectionRoom roomList={ goodPriceInfo.list }></SectionRoom>
        </div>
      </div>
      
      
    </HomeWrapper>
  )
})

export default Home