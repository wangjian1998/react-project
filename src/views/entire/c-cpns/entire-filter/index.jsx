import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo((props) => {

  const [selectItem, setSelectItem] = useState([])

  function itemClickHandle(item){
    const newArr = [...selectItem]
    if (newArr.includes(item)) {
      const index = newArr.findIndex(newArrItem => newArrItem === item)
      newArr.splice(index, 1)
    } else {
      newArr.push(item)
    }
    setSelectItem(newArr)
  }

  return (
    <FilterWrapper>
      <div className="filter">
        {
          filterData.map(item => {
            return (
              <div className={classNames('item', {active: selectItem.includes(item)})} key={item} onClick={e => itemClickHandle(item)}>{item}</div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

EntireFilter.propTypes = {}

export default EntireFilter
