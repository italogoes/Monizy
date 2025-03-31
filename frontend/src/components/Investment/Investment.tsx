import style from './style.module.css'
import { AiOutlineArrowRight } from "react-icons/ai";

const Investment = () => {
  return (
    <div className={style.card}>
        <div className={style.title}>
          <p>Ivestimentos</p>
          <AiOutlineArrowRight/>
        </div>

        <div className={style.value}>
          <h3>R$ 3.000,00</h3>
        </div>
    </div>
  )
}

export default Investment