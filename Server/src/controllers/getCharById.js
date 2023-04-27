const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character"

// const getCharById = (req, res) =>{
//     const {id} = req.params;

//     axios(`${URL}/${id}`)
//     .then(response => response.data)
//     .then(({status, name, species, origin, image, gender}) => {
//         if(+id && name){
//             const character = {
//                 id,
//                 name,
//                 species,
//                 origin,
//                 image,
//                 status,
//                 gender
//             }
//             return res.status(200).json(character)      
//         }
//         return res.status(404).send('Not found')
//     })
//     .catch(error => res.status(500).send(error.message))// no lleva return por las arrow functions
// }

const getCharById = async (req, res)=>{
    
    try {
        const {id} = req.params;
        const {data} = await axios(`${URL}/${id}`);
        const {status, name, species, origin, image, gender} = data

        if(!name) throw new Error(`ID: ${id} Not found`)
        
        const character = {
            id,
            name,
            species,
            origin,
            image,
            status,
            gender
        }
        return res.status(200).json(character)
        
    } catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    } 
}

module.exports = {
    getCharById
}