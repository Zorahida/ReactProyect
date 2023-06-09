import axios from "axios";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Card from "../components/Card";
import '../styles/App.css'

const Character = () => {

      const[characters, setCharacters] = useState([]);
      const [filteredCharacters, setFilteredCharacters] = useState([]);
      const[name, setName] = useState("");
  
      const getDataApi = async () => {

          const response = await axios.get(
            /*`https://swapi.dev/api/people/`);*/
              `https://rickandmortyapi.com/api/character/?page=2"`);

              setCharacters(response.data.results)
              //console.log(response.data.results);
          };

      const renderCharacters = () => {

        return filteredCharacters.map((character, i) => (
         <article key={i}>
            <h2>{character.name}</h2>
          <h4>{character.status}</h4>
          <img src={character.image} alt={character.name} />
        </article>
        )
        );
      };

      useEffect(() => {
        getDataApi();
    },[]);

  useEffect ( () => {
      setFilteredCharacters(
          characters.filter((character) => character.name.includes(name))
      );
}, [characters,name]);

return(
  <div>
      <h1>Rick&Morty</h1>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {filteredCharacters.map((character, i) => (
        <div key={i}>
        <Link to={'/character/' + character.name}>
        <Card item={character}/>
          <h2>{character.name}</h2>
          <h4>{character.status}</h4>
          <img src={character.image} alt={character.name} />
        </Link>
        </div>
      ))}
      {renderCharacters()}
      </div>
      )};
      
export default Character
