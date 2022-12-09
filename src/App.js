import './App.css'
import Form from './components/Form.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Detail from './components/Detail.jsx'
import Favorites from './components/Favorites.jsx'
//import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
//import characters, { Rick } from './data.js'
import styled from 'styled-components';
import {useState,useEffect} from 'react'; 
import {Routes,Route,useNavigate,useLocation } from 'react-router-dom';


const DivGral = styled.div`
   //display: flex;
   background-color:grey;
   margin: 0 auto;
`;

const DivCards = styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content :space-around;
`;

// const example = {
//    name: 'Morty Smith',
//    species: 'Human',
//    gender: 'Male',
//    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
// };



function App () {
const location = useLocation()    
const navigate = useNavigate();
const [access, setAccess] = useState(false);
const username = 'ejemplo@gmail.com';
const password = '1234';

 function login(userData) {
  //  console.log(userData)
   if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');   
   }     
}

 function logout() {
      setAccess(false); 
      navigate('/');
}
 
useEffect(() => {
   !access && navigate('/');
}, [access]);

  const [characters, setCharacters] = useState([]);

  const onSearch  = (character) => { 
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  const onClose = (id) => {
     //alert(id)
     console.log(characters)
     setCharacters(characters.filter(c => c.id !== id))
      //console.log(e.target.value)
    }

  
  return (
    
<DivGral className='App'>

     <div>{location.pathname !== '/' && 
     <Nav onSearch={onSearch} logout={logout}/>
          } 
    </div>      

    <hr />
      <Routes>     

            <Route path='/' element={
                
                    <Form login={login} />
                
                                    }/>     
            <Route path='/home' element={ 
                <DivCards>
                     
                  
                    <Cards characters ={characters} 
                           onClose    ={onClose}/> 
                  
                
            </DivCards>         
                                        }/>            
            <Route path='/about' element={
                <About />
            }/>
            <Route path='/favorites' element={
                <Favorites />
            }/>
            <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <hr />
    </DivGral>    
  )
}

export default App
