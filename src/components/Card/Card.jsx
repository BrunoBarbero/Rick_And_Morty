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
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
        
         <button onClick={()=>onClose(id)}>X</button>

         <img src={image} alt= {name} />

         <Link to={`/detail/${id}`} >
            <h2>{name}</h2>
         </Link>
         
         <h2>{species}</h2>
         <h2>{gender}</h2>

      </div>
   );
}
export default Card