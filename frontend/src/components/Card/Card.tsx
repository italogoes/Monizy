import { PropsWithChildren } from 'react'
import style from './style.module.css'

const Card = ({ children }: PropsWithChildren) => {
  return (
    <div className={style.box}>
        {children}
    </div>
  )
}

export default Card