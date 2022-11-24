import React, { memo, useState } from 'react'
import {CSSTransition} from 'react-transition-group'
import {CenterWrapper} from './style'
import IconSearch from '@/assets/svg/icon_search'
import Searchtitles from '@/assets/data/search_titles.json'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo((props) => {
  const {isSearch, showSearch} = props
  const [tabIndex, setTabIndex] = useState(0)
  const titles = Searchtitles.map(item => item.title)

  function handleSearchShow() {
    if (showSearch) showSearch()
  }
  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit={true}>
        <div className="search-btn" onClick={handleSearchShow}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearch/>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        unmountOnExit={true}>
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex}></SearchTabs>
          <div className="infos">
            <SearchSections searchInfos={Searchtitles[tabIndex].searchInfos}></SearchSections>
          </div>
        </div>
      </CSSTransition>





      {/* <div className="search-btn">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearch/>
        </div>
      </div>

      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex}></SearchTabs>
        <div className="infos">
          <SearchSections searchInfos={Searchtitles[tabIndex].searchInfos}></SearchSections>
        </div>
      </div> */}
    </CenterWrapper>
  )
})

export default HeaderCenter
