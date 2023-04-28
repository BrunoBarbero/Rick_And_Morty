import style from './About.module.css'

const About = ()=>{
    return (
        
        <div className= {style.container}>
            <h1>Bienvenidos a la aplicacion de Rick And Morty</h1>
            <h2>Aqui encontraras a todos los personajes del programa con sus caracteristicas</h2>
            <h2>Solo tienes que ingresar un numero para que aparezca el personaje encontraras toda su informacion</h2>
            <h2>Hasta puedes darle like para encontrarlos mas facilmente la proxima vez que lo busques</h2>
        </div>
    )
}
export default About