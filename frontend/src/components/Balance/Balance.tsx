import style from './style.module.css'
import { AiOutlineBank } from "react-icons/ai";

const Balance = () => {
  return (
    <div className={style.card}>
        <div className={style.title}>
          <p>Saldo Atual</p>
          <AiOutlineBank/>
        </div>

        <div className={style.value}>
          <h3>R$ 1.000,00</h3>
        </div>
    </div>
  )
}

export default Balance