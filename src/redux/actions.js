import { ADD_FAV, DELETE_FAV, ORDER, FILTER } from "./action-types"

export const addFav = (character) =>{
    return{ type: ADD_FAV, payload: character }
}

export const deleteFav = (id)=>{
    return{ type: DELETE_FAV, payload: id }
}

export const filterCards = (gender) =>{
    return { type: FILTER, payload: gender }
}

export const orderCards = (order)=>{
    return { type: ORDER, payload: order }
}