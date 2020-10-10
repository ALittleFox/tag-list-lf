import { FC,ReactElement  } from 'react'
export interface TagInputProps  {
  onItemClick?: Function
  data?: object[] | any[]
  id?: string
  name?: string
  icon?: string | ReactElement | FC
  className?: string
  onMoreClick?: Function
  onCleanClick?:Function
}
