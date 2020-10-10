### 介绍
tag list
### 依赖
react >= 16.9

### API
| API          | type          | Desc                                   |
| :----------- | ------------- | -------------------------------------- |
| onMoreClick  | function      | 点击三个点触发                         |
| onCleanClick | function      | 点击三个点后到x触发                    |
| onItemClick  | function      | 点击元素的x触发                        |
| data         | []            | 展示元素的数组                         |
| id           | string        | 元素的id字段（默认id）                 |
| name         | string        | 元素的名称，用来显示（默认name）       |
| icon         | string \| jsx | 元素的x替换，如 'del' / <div>del</div> |
| className    | string        | 添加css类名                            |

### demo

```react
import {TagInput} from '../src/index'

const arr = [{
    name: '当时发生的嘎是',
    id: 0,
  },{
    name: '时发生',
    id: 1,
  }]
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
      <TagInput 
          onCleanClick={ onCleanClick} 
          onMoreClick={ onMoreClick} 
          onItemClick={onItemClick} 
          data={arr} 
          name={'name'}
          id={'id'}
          />
    </div>
  )
}
```

