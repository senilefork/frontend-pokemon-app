import React from "react";
import { useState, useEffect, useRef } from "react";
import PokemonApi from "./pokemonApi";
import Pokemon from "./Pokemon";
import SearchBar from "./SearchBar";
import getAbilities  from "./helpers/getAbilities";
import "./PokemonList.css";

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([]);
    const [filteredPokemon, setFilteredPokemon] = useState([]);
    const [errors, setErrors] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [newPokemon, setNewPokemon] = useState(false);
    const [offset, setOffset] = useState(20);
    const [searchInput, setSearchInput] = useState(null);
    const mounted = useRef(false);
    const count = useRef(0);

    //data fetching function
    const fetchData = async () =>{
      setIsLoading(true);
        try{
          const response = await PokemonApi.getPokemonData(offset, 20);
          const pokemonData = response.pokemonData;
          count.current = response.count;
          setPokemon((loadedPokemon) =>{
            return [...loadedPokemon, ...pokemonData];
          });
          setNewPokemon(false);
          setIsLoading(false);
        }catch(error){
          setNewPokemon(false);
          setIsLoading(false);
          setErrors(error.message);
        }
    };

    //fetches data after initial render and anytime offset chagnes
    useEffect(() =>{
       fetchData();
    }, [offset]);

    //lets us know if we need to fetch new pokemon, adds to pagination state and if at end //of pagination function returns
    useEffect(() => {
      if(!mounted.current){
        mounted.current = true;
        return;
      }
      if(offset >= count.current) return;
      if(!newPokemon) return;
      if(isLoading) return;
      setOffset(a =>{
        return a + 20;
      });
    }, [newPokemon]);

    //scroll event lets us know if we're at the bottom of the page
    const scrollEvent = () =>{
      if((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 100){
        setNewPokemon(true);
        console.log('bottom');
      }
    };

    useEffect(() =>{
      window.addEventListener('scroll', scrollEvent);
      return () => window.removeEventListener('scroll', scrollEvent);
    },[]);
    
    //search filter function for our search bar, search by name or abilities
    const searchFilter = (string) => {
      if(string) string = string.toLowerCase();
      const filteredPokemon = pokemon.filter(p => {
        return (
          p.name.includes(string) ||
          getAbilities(p.abilities).includes(string)
      )});
      setFilteredPokemon(filteredPokemon);
   };

   return(

       <div className="container">
       <SearchBar
         searchFilter={searchFilter}
         searchInput={searchInput}
         setSearchInput={setSearchInput} />

         {errors.length > 0 ? <p>{errors}</p>:
          <table>
           <thead>
            <tr>
             <th>Pokemon</th>
             <th>Abilities</th>
             <th>Forms</th>
             <th>Species</th>
             <th>Types</th>
            </tr>
           </thead>
           
           {searchInput ? filteredPokemon.map(p => {
            return <Pokemon
                    name={p.name}
                    key={p.name}
                    base_experience={p.base_experience}
                    abilities={p.abilities}
                    forms={p.forms}
                    species={p.species}
                    types={p.types}
                    num_moves={p.num_moves}
                    weight={p.weight}
                    height={p.height}
                    img_front={p.img_front} />
          }) :
          pokemon.map(p => {
            return <Pokemon
                    name={p.name}
                    key={p.name}
                    base_experience={p.base_experience}
                    abilities={p.abilities}
                    forms={p.forms}
                    species={p.species}
                    types={p.types}
                    num_moves={p.num_moves}
                    weight={p.weight}
                    height={p.height}
                    img_front={p.img_front}  />
          })}
          {isLoading ? <tbody><tr><td className="loading-td">Loading...</td></tr></tbody> : null}
          
          </table>}
       </div>
   );
};

export default PokemonList;

