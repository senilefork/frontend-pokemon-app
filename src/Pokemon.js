import { useState } from "react";
import "./Pokemon.css";
import "./ClickedPokemon";
import ClickedPokemon from "./ClickedPokemon";

const Pokemon = 
({ name,
   base_experience, 
   abilities, 
   forms, 
   species, 
   types, 
   num_moves,
   weight,
   height,
   img_front }) =>{

  const [clickedPokemon, setIsClickedPokemon] = useState(false);
  
   return(
       <tbody>
         <tr>
           {clickedPokemon ? 
            <ClickedPokemon 
               setIsClickedPokemon={setIsClickedPokemon}
               name={name}
               base_experience={base_experience}
               num_moves={num_moves}
               weight={weight}
               height={height} /> :
            <td className="pokemon-td" onClick={() => setIsClickedPokemon(true)}>
              <div className="title-img">
                <h4>{name}</h4>
                <img className="image" src={img_front} alt="pokemon-image"/>
              </div>
            </td>}
            <td>
              <ul>
               {abilities.map((a,i)=> <li key={i+1*Math.random()}>{a.ability.name}</li>)}
              </ul>
            </td>
           <td>{forms.map(f => f.name)}</td>
           <td>{species.name}</td>
           <td>{types.map(t => t.name)}</td>
         </tr>
       </tbody>
   );
};

export default Pokemon;