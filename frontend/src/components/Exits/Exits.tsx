import style from './style.module.css'
import { AiOutlineArrowDown } from "react-icons/ai";

const Exits = () => {
  return (
    <div className={style.card}>
        <div className={style.title}>
          <p>Despesas Totais</p>
          <AiOutlineArrowDown/>
        </div>

        <div className={style.value}>
          <h3>R$ 2.000,00</h3>
        </div>
    </div>
  )
}

export default Exits