import style from './style.module.css'
import { NavLink } from "react-router"
import Card from "../../components/Card/Card"
import Balance from "../../components/Balance/Balance"
import Entries from '../../components/Entries/Entries'
import Exits from '../../components/Exits/Exits'
import Investment from '../../components/Investment/Investment'

const DashboardTemplate = () => {
  return (
    <main className={style.main}>
      <div className="content">
        <h1 className={style.name_page}>Dashboard</h1>
        <div className={style.cards}>
          <NavLink to="/entradas">
            <Card>
              <Balance/>
            </Card>
          </NavLink>

          <NavLink to="/entradas">
            <Card>
              <Entries/>
            </Card>
          </NavLink>

          <NavLink to="/entradas">
            <Card>
              <Exits/>
            </Card>
          </NavLink>

          <NavLink to="/entradas">
            <Card>
              <Investment/>
            </Card>
          </NavLink>
        </div>

        <div>
          
        </div>
      </div>
    </main>
  )
}

export default DashboardTemplate