import { Link } from "react-router-dom";
import style from './Card.module.css'

const Card=({name, status, species, gender, origin, image, onClose, id})=> {
   return (
      <div className={style.contenedor}>
        
         <button onClick={()=>onClose(id)}>X</button>
         
         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt= {name} />
      
      </div>
   );
}
export default Card