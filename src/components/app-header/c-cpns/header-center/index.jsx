import React, { memo, useState } from 'react'
import {CenterWrapper} from './style'
import IconSearch from '@/assets/svg/icon_search'
import Searchtitles from '@/assets/data/search_titles.json'
import SearchTabs from './c-cpns/search-tabs'
import SearchSections from './c-cpns/search-sections'

const HeaderCenter = memo(() => {

  const [tabIndex, setTabIndex] = useState(0)
  const titles = Searchtitles.map(item => item.title)
  return (
    <CenterWrapper>
      {/* <div className="search-btn">
        <div className="text">搜索房源和体验</div>
        <div className="icon">
          <IconSearch/>
        </div>
      </div> */}

      <div className="search-detail">
        <SearchTabs titles={titles} tabClick={setTabIndex}></SearchTabs>
        <div className="infos">
          <SearchSections searchInfos={Searchtitles[tabIndex].searchInfos}></SearchSections>
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
