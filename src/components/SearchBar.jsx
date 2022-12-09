import styled from 'styled-components';
import React, { useState } from "react";

const Input = styled.input`
  border-radius: 5px;
  padding: 5px;
`;

const Buttons = styled.button`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  background-color:green;
  color:white;  
  font-size:1rem;
  font-family:cursive;
`;

export default function SearchBar({onSearch}) {

const [character, setCharacter] = useState('');

const handleInputChange = (event) => {
     setCharacter(event.target.value)
    }

   return (
      <form onSubmit={(e)=>{
        //console.log('este hay en e:' ,e)
        e.preventDefault();
        onSearch(character);
        setCharacter('');
        const inputDOM =document.getElementById('task-input');
        inputDOM.value='';
        ;
        
        }}>
      <Input type='search' id='task-input' onChange={handleInputChange} />
      <Buttons>Agregar</Buttons>
      </form>
   );
}
