import React , { useState, useEffect }   from 'react';
import axios from 'axios';
import Game from './Game/Game';
import api from '../../api/index.js';


const Recent = () => {

  const [games, setGames] = useState();
  const [url, setUrl] = useState("https://api.igdb.com/v4/release_dates");
  const [data, setData] = useState("fields game.name,game.cover.url,game.genres.name ; sort date desc ;where date < "+String(Math.round((new Date()).getTime() / 1000))+";limit 8;");



  useEffect(() => {


    const getData = async () => {
      const resp = await api(url,data);
      setGames(resp.data);
    }
    getData();
    console.log(games , "5rr6");

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
        <Game key={g.id} row={g} />
    ) )}
    </div>
  );
}

export default Recent;
