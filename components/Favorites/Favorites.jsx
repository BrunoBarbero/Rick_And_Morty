import Card from '../Card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../redux/actions';
import { useState } from 'react';
import style from './Favorites.module.css'


const Favorites  = ({myFavorites}) => {

    const dispatch = useDispatch()
    const[aux, setAux]= useState(false)

    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))
    }


    return(
        <div className={style.container}>
            <div className={style.divSelectores}>
                <select className={style.selectorOrden} onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Decreciente</option>
                </select>

                <select className={style.selectorGenero} onChange={handleFilter}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">Unknown</option>
                    <option value="allCharacters">AllCharacters</option>
                </select>
            </div>

            <div className={style.divCartas}>
                {
                    myFavorites?.map(fav=> {
                        return(
                            <Card
                                key={fav.id}
                                id={fav.id}
                                name={fav.name}
                                species={fav.species}
                                gender={fav.gender}
                                image={fav.image}
                                onClose={fav.onClose}
                                
                            />
                        )
                    })
                }
            </div>    
        </div>
    )
}
const mapStateToProps = (state) =>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
) (Favorites);