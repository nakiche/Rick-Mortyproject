import Card from './Card';


export default function Cards(props) {

   const { characters } = props;
   //console.log(props.onClose)
   return (
      //<div style={{ display: 'flex'}}>
       

      characters.map((c,b)=>
         <Card key={b}
          id={c.id}
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          onClose={props.onClose}
         />
         )

   //</div>
   );
}
