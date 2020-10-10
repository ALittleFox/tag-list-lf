import * as React from 'react'
import {TagInput} from '../src/index'

const list = [
  {
    name: '当时发生的嘎是',
    id: 0,
  },
  {
    name: '时发生',
    id: 1,
  },
  {
    name: 'name2',
    id: 2,
  },
  {
    name: 'name3',
    id: 3,
  },
  {
    name: 'name4',
    id: 4,
  },
  {
    name: 'name5',
    id: 5,
  },
  {
    name: 'name6',
    id: 6,
  },
]
const App = () => {
  const onItemClick = id => {
    console.log(id)
  }
  const onMoreClick = () => {
    console.log('onMoreClick')
  }
  const onCleanClick = () => {
    console.log('onCleanClick')
  }
  return (
    <div>
      <TagInput onCleanClick={ onCleanClick} onMoreClick={ onMoreClick} onItemClick={onItemClick} data={list} />
    </div>
  )
}

export default App
