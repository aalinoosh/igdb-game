import React , { useState, useEffect }   from 'react';
import axios from 'axios';
import Game from './Game/Game';
import hjhjhj from '../../api/index.js';


const Listgame = () => {

  const corsUrl = "http://0.0.0.0:8080/";
  const [games, setGames] = useState();
  const [url, setUrl] = useState(corsUrl+"https://api.igdb.com/v4/games");
  const [data, setData] = useState("fields name,follows,rating,cover.url,rating_count,genres.name; sort follows desc; where follows != null;  limit 8;");
  // const [data, setData] = useState("fields name,follows,rating,cover.url,rating_count,genres.name; sort follows desc; where follows != null;  limit 8;");


  // function ch1(){
  //   console.log("hey");
  //   setPage(2);
  //   setUrl(corsUrl+"https://api.igdb.com/v4/release_dates");
  //   console.log(url);
  //   setData("fields game.name  ; sort date desc ;where date < "+String(Math.round((new Date()).getTime() / 1000))+";");
  // }

  console.log(hjhjhj);


  useEffect(() => {
    const getData = async () => {

        const resp = await axios({
        url: url,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '8sw09jo6mw0fbzr8218zktyvhg5nol',
            'Authorization': 'Bearer 733r2i8fm28grd49y5sywir1tl069y',
        },
        data: data

      });
      console.log(resp.data);
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

export default Listgame;
