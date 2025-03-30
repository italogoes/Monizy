import style from './style.module.css'
import { NavLink } from "react-router";

const MenuBar = () => {
  return (
    <header className={style.header}>
        <div className="content">
            <div className={style.sub_header}>
                <nav className="logo">
                    <NavLink to="/">Monizy</NavLink>
                </nav>

                <nav>
                    <NavLink to="/">Dashboard</NavLink>
                </nav>

                <div>
                    
                </div>
            </div>
        </div>
    </header>
  )
}

export default MenuBar