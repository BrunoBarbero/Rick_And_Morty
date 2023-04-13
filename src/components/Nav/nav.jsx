import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './Nav.module.css'



const Nav = (({onSearch, setAccess})=>{
   
   const handleLogOut = () =>{
    setAccess(false)
   }
   
    return(
        <nav>
          
           <div>
                <Link className={style.botonAbout} to='/about'>ABOUT</Link>
            </div>
            <div>
                <Link to='/home'>HOME</Link>
            </div>
            <div>
                <Link to='/' onClick={handleLogOut}>Log Out</Link>
            </div>
            <div>
                <Link to='/favorites'>Favorites</Link>
            </div>

            <SearchBar onSearch={onSearch}/>

        </nav>
    )
})
export default Nav 