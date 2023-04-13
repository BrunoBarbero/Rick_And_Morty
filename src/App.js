import './App.css';
import Cards from './components/Cards/Cards.jsx';
import About from './components/About/About';
import Nav from './components/Nav/nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'bfbd8c3387c3.135f9a9e1c53a3f1713c'

const email = 'colo@gmail.com'
const password = 'asd123'

function App() {

   const location = useLocation();
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([])  
   const [access, setAccess] = useState(false)
   

   const login = (userData) => {

      if(userData.email === email && userData.password === password){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(() => {

      !access && navigate('/')
   }, [access, navigate])


   const onSearch =(id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }
   
   const onClose = (id)=>{
      setCharacters(
         characters.filter(character => character.id !== (id))
   )}

   return (
      <div className='App'>
         { 
            location.pathname !== '/' && <Nav onSearch={onSearch} setAccess={setAccess} />
         }
            
         <Routes>
            <Route path='/' element={<Form login ={login}/>} />
            <Route path='/home' element = {<Cards onClose={onClose} characters={characters} />} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>} />  
            <Route path='/favorites' element={<Favorites/>} /> 
         </Routes>
         
        
      </div>
   );
}
export default App;
 