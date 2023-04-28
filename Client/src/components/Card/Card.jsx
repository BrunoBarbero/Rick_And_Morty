import { Link } from "react-router-dom";
import style from './Card.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, deleteFav } from "../../redux/actions";


const Card=({name, species, gender, image, onClose, id})=> {
   
   const dispatch = useDispatch();

   const myFavorites = useSelector(state => state.myFavorites)

   const[isFav, setIsFav] = useState(false);

   const handleFavorite = () =>{
      if(isFav) {
         setIsFav(false);
         dispatch(deleteFav(id));
      }
      else{
         setIsFav(true);
         dispatch(addFav({name, species, gender, image, onClose, id}))
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);
   
   return (
      <div className={style.contenedor}>
        
        {
            isFav ? (
               <button className={style.botonFav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={style.botonFav} onClick={handleFavorite}>🤍</button>
            )
         }
        
         <button className={style.botonX} onClick={()=>onClose(id)}>X</button>

         <img src={image} alt= {name} />

         <Link to={`/detail/${id}`} >
            <h2 className={style.name} >{name}</h2>
         </Link>
         
      </div>
   );
}
export default Card