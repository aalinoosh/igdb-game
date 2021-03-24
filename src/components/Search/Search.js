import React , { useState, useEffect }   from 'react';
import axios from 'axios';
import Game from './Game/Game';
import api from '../../api/index.js';


const Search = () => {

  const [games, setGames] = useState();
  const [url, setUrl] = useState("https://api.igdb.com/v4/games");
  const [data, setData] = useState('fields name,follows,rating,cover.url,rating_count,genres.name; search "Halo";  limit 8;');



  useEffect(() => {


    const getData = async () => {
      const resp = await api(url,data);
      setGames(resp.data);
    }
    getData();


  }, []);

  return (
    (!games)?
    <>
    loading ....
    </>
    :
    <div className="flex flex-wrap" >

    {games.map( (g) =>
      (
      <Game key={g.id} game={g} />
    ) )}
    </div>
  );
}

export default Search;
