import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import style from './Nav.module.css'

const Nav = (({onSearch})=>{
    return(
        <nav>
            <SearchBar onSearch={onSearch}/>
           
            <button>
                <NavLink className={style.botonAbout} to='/about'>ABOUT</NavLink>
            </button>
           
            <button>
                <Link to='/home'>HOME</Link>
            </button>
        </nav>
    )
})
export default Nav 