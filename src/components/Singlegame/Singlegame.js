import React , { useState, useEffect }   from 'react';
import axios from 'axios';
import api from '../../api/index.js';
import {  useParams } from "react-router-dom";
import Game from './Game/Game';


const Singlegame = () => {

  let { id } = useParams();
  const [games, setGames] = useState();
  const [url, setUrl] = useState("https://api.igdb.com/v4/games");
  const [data, setData] = useState("fields name,follows,rating,cover.url,rating_count,genres.name  , platforms.name,screenshots.url, storyline, summary, updated_at, involved_companies.company.name, involved_companies.developer  ; where id = "+id+";  limit 1;");



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

export default Singlegame;
