import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {addFavorite,deleteFavorite} from '../redux/actions'

const DivCard = styled.div`
   border-radius: 25px;
   border: solid 2px;
   display:inline-block;
   padding:5px;
   background-color:white;
   box-shadow: 0 0 0 0.1rem black;
   position:relative;
`;

const InsideCard = styled.div`
   display:flex;
   flex-direction:column-reverse;
   `;

const Data = styled.div`
   display:flex;
   justify-content:space-around; 
   `;

const H2 = styled.h2`
   background-color : grey;
   margin:0;
   //color:white;
   width: 70%;
   font-size: 1.5em;
   position: absolute; left: 10px; top: 300px;
`;

const DivButton = styled.div`
 display:flex;
 //flex-direction:row-reverse;
 justify-content:space-between;
`;

const Buttons = styled.button`
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  background-color:red;
  color:white;  
`;

const FavButton = styled.button`
   background-color:transparent;
   border: none
`

export function Card({myFavorites,deleteFavorite,addFavorite,id,name,species,gender,image,onClose}) {
  // console.log(id)
  // console.log(onClose)
 console.log(myFavorites)



 const [isFav, setIsFav] = React.useState(false); 
 
 const handleFavorite = () => {
      //console.log(id,name,species,gender,image)
      //console.log('props',props)
      let props = { id: id,
                    name:name,
                    species:species,
                    gender:gender,
                    image:image
                  }
      if (isFav){
      console.log('lo cambio a false')   
      setIsFav(false)
      deleteFavorite(id)
      }
       else
      {
      console.log('lo cambio a true')   
      setIsFav (true); 
      addFavorite(props)
      } 
 }

  React.useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);


   return (
    
      <DivCard>
         
         
        <DivButton>
      {
         isFav ? (
       <FavButton onClick={handleFavorite}>❤️</FavButton>
       ) : (
       <FavButton onClick={handleFavorite}>🤍</FavButton>
       )
      }
         <Buttons onClick={(e)=>{
         e.preventDefault();
         onClose(id);
         }}>X</Buttons>
        </DivButton>
        <InsideCard>   
         <Link to={`/detail/${id}`}>
            <H2>{name}</H2>
         </Link> 
          <Data> 
            <h2>{species}</h2>
            <h2>{gender}</h2>
          </Data>  
            <img  src={image} alt="" />
        </InsideCard>

      </DivCard>
     
   );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
 }

export function mapDispatchToProps(dispatch) {
   return {
      deleteFavorite:function(id){
         dispatch(deleteFavorite(id));
      },
      addFavorite:function(personaje){
         dispatch(addFavorite(personaje))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
