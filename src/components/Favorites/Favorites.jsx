import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Favorites = ()=>{

    const { myFavorites } = useSelector(state => state)
    return(
        <div>
            {
                myFavorites.map((character)=>{
                    return(
                        <div>
                            
                            <img src={character.image} alt= {character.name} />

                            <Link to={`/detail/${character.id}`} >
                            <h2>{character.name}</h2>
                            </Link>

                            <h2>{character.species}</h2>
                            <h2>{character.gender}</h2>
                          
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Favorites