
const ClickedPokemon = ({ setIsClickedPokemon, name, num_moves, weight, height }) =>{
  
  return(
    <td className="pokemon-td" onClick={() => setIsClickedPokemon(false)}>
      <ul>
        <li><b>Name: </b>{name}</li>
        <li><b>Number of moves: </b>{num_moves}</li>
        <li><b>Weight: </b>{weight}</li>
        <li><b>Height: </b>{height}</li>
      </ul>
    </td>
  );
};

export default ClickedPokemon;