import React from "react";
import styled from 'styled-components';
import { connect } from 'react-redux';
import Card from './Card';

const DivCards = styled.div`
   display: flex;
   flex-wrap:wrap;
   justify-content :space-around;
`;

export function Favorites(myFavorites) {

  return (

      <DivCards>
       
        
        {/*<InsideCard>   */}
         {myFavorites.myFavorites.map((c,b)=>
         <Card key={b}
          id={c.id}
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          //onClose={props.onClose}
         />
         )}
        {/*</InsideCard>*/}
        

      
         </DivCards>
      
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
 }

export default connect(mapStateToProps, null)(Favorites);