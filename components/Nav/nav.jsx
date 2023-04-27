import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink } from "react-router-dom";
import style from './Nav.module.css'



const Nav = (({onSearch, setAccess})=>{
   
   const handleLogOut = () =>{
    setAccess(false)
   }
   
    return(
        <nav className={style.container}>
          
           <div>
                <Link className={style.botonAbout} to='/about'>ABOUT</Link>
            </div>
            <div>
                <Link className={style.botonHome} to='/home'>HOME</Link>
            </div>
            <div>
                <Link className={style.botonFavorites} to='/favorites'>FAVORITES</Link>
            </div>

            <SearchBar  onSearch={onSearch}/>

            <div>
                <Link className={style.botonLogOut} to='/' onClick={handleLogOut}>Log Out</Link>
            </div>
        </nav>
    )
})
export default Nav 