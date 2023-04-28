import { useState } from "react";
import style from './SearchBar.module.css'

const SearchBar =({ onSearch })=> {
   
   const [id, setId] = useState('')

   const handleChange = (event) =>{
      setId(event.target.value)
      
   }
   
   return (
      <div classsName={style.container}>
         <input className={style.inputId} type='search' value={id} onChange={handleChange} />
         <button className={style.botonAgregar} onClick={() => {onSearch(id); setId('')}}>Agregar</button>
      </div>
   );
}
export default SearchBar