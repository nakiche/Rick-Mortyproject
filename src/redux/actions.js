const ADD_FAVORITE= 'ADD_FAVORITE';
const DELETE_FAVORITE= 'DELETE_FAVORITE';

export const addFavorite  = (character) => {
	// console.log('ADD_FAVORITE')
	// console.log(character)
  // Completa la funcion
  return{
    type:ADD_FAVORITE,
    payload:character
  }
};

export const deleteFavorite  = (id) => {
	// console.log('DELETE_FAVORITE')
  // Completa la funcion
  return{
    type:DELETE_FAVORITE,
    payload:id
  }
};