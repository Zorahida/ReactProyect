import axios from "axios";
import { useState, useEffect } from "react";
import CardEpisodes from "../components/CardEpisodes";
import { Link } from "react-router-dom";
import '../styles/App.css'

function Episode() {

    const[listEpisodes, setListEpisodes] = useState([]);
    const[episodeFilter, setEpisodeFilter] = useState("");

    const getAllEpisodes = async () => {

    const response = await axios.get(
            `https://rickandmortyapi.com/api/episode/?page=id`);

        setListEpisodes(response.data.results);
            //console.log(response.data.results);
        };

        useEffect(() => {
            getAllEpisodes();
        }, []);

    const renderEpisodes = () => {
        return listEpisodes.map((episode, i) => (
           <div key= {i}>
             <h4>Episode number: {episode.id}</h4>
             <p>{episode.url}</p>
            <img src={episode.characters} alt={episode.name} />
            <Link to={`/episode`}>
            <CardEpisodes item={episode} />
          </Link>
        </div>
        ));
    };


    const handleFilterChange = (e) => {
        setEpisodeFilter(e.target.value);
    };

    const filteredEpisodes = listEpisodes.filter((episode)=>
   episode.name.includes(episodeFilter) 
   );

   return (
    <div>
        <h2>Ricky&Morty</h2>
        <input
        type="text"
        value={episodeFilter}
        onChange={handleFilterChange} />
        {filteredEpisodes.length > 0 ? (renderEpisodes() ) : (<p>Error</p>)}
    </div>
   );
};

export default Episode;