import React, { memo, useState, createRef } from 'react'
import { CSSTransition } from 'react-transition-group';

import SearchTitles from '@/assets/data/search_titles';
import { CenterWrapper } from './style';
import IconSearchBar from '@/assets/svg/icon-search-bar';
import SearchTabs from './c-cpns/search-tabs';
import SearchSections from './c-cpns/search-sections';

const HeaderCenter = memo((props) => {
  const { isSearch, searchBarClick } = props;

  const searctTabsRef = createRef();
  const searchDetailRef = createRef();

  const [tabIndex, setTabIndex] = useState(0);
  const titles = SearchTitles.map(item => item.title);

  const searchBarClickHanle = () => {
    if (searchBarClick) searchBarClick();
  }

  return (
    <CenterWrapper>
      {/* 动画完成后，把组件卸载掉 unmountOnExit */}
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
        nodeRef={searctTabsRef}
      >
        <div ref={ searctTabsRef } className="search-bar" onClick={searchBarClickHanle}>
          <div className="text">
            搜索房源和体验
          </div>
          <div className="icon bg-root-primaryColor">
            <IconSearchBar></IconSearchBar>
          </div>
        </div>
      </CSSTransition>

      {/* 搜索详情 */}
      <CSSTransition
        in={ isSearch }
        classNames="detail"
        timeout={ 250 }
        unmountOnExit={ true }
        nodeRef={ searchDetailRef }
      >
        <div ref={ searchDetailRef } className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex}></SearchTabs>
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos}></SearchSections>
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter