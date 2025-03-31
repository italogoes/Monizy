import style from './style.module.css'
import { AiOutlineArrowUp } from "react-icons/ai";

const Entries = () => {
  return (
    <div className={style.card}>
        <div className={style.title}>
          <p>Receitas Totais</p>
          <AiOutlineArrowUp/>
        </div>

        <div className={style.value}>
          <h3>R$ 3.000,00</h3>
        </div>
    </div>
  )
}

export default Entries