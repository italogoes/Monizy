import style from './style.module.css'
import { PropsWithChildren } from 'react'

const MiniChartBox = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.box}>{children}</div>
  )
}

export default MiniChartBox