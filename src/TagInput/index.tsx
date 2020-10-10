import * as React from 'react'
import './index.css'
import { TagInputProps } from './type'

const theItems = (data, id, name, icon, onItemClick) => {
  return data.map(item => {
    return (
      <span key={item[id]} className={'tag-input-lf-items'}>
        {item[name]}
        <span className={'tag-input-lf-close'}>
          {icon ? (
            icon
          ) : (
            <span
              onClick={() => {
                onItemClick(item[id])
              }}
            >
              x
            </span>
          )}
        </span>
      </span>
    )
  })
}

const TagInput: React.FC<TagInputProps> = ({
  onItemClick,
  onCleanClick,
  onMoreClick,
  data,
  id,
  name,
  icon,
  className }) => {
  // const onMouseEnter = () => {
  //   console.log('onMouseEnter')
  // }
  // const onMouseLeave = () => {
  //   console.log('onMouseLeave')
  // }
  return (
    <div className={ `tag-input-lf-wrap ${className}` }
      // onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave }
    >
      <div className={'tag-input-lf-border tag-input-lf-input'}>
        {theItems(data, id, name, icon, onItemClick)}
        <span className={'tag-input-lf-icon'}>
          <span className={'tag-input-lf-more'} onClick={() => onMoreClick()}>
            <i />
            <i />
            <i />
          </span>
          {data?.length?<span className={'tag-input-lf-clean'} onClick={() => onCleanClick()}>
            x
          </span>:null}
        </span>
      </div>
      {data?.length?<div className={'tag-input-lf-list'}>
        <div className={'tag-input-lf-border tag-input-lf-all'}>{theItems(data, id, name, icon, onItemClick)}</div>
      </div>:null}
    </div>
  )
}
TagInput.defaultProps = {
  onItemClick : () => { },
  onCleanClick : () => { },
  onMoreClick : () => { },
  data : [],
  id : 'id',
  name : 'name',
  className : ''
}

export { TagInput }
