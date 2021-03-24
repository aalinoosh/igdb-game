import React , { useState, useEffect }   from 'react';
import './App.css';
import axios from 'axios';


function App() {




  // let params = new URLSearchParams();
  // params.append('grant_type', 'client_credentials');
  // params.append('client_id', "8sw09jo6mw0fbzr8218zktyvhg5nol");
  // params.append('client_secret', "eqf23i39ai13jiy2ccap3dn4n83l3n");
  //
  // axios.post(`https://id.twitch.tv/oauth2/token`, params )
  //       .then(res => {
  //         console.log(res);
  //         console.log(res.data.access_token);
  //       })
  ///////////// access_token = 733r2i8fm28grd49y5sywir1tl069y


  // const params = new URLSearchParams()
  //
  // const config = {
  //   headers: {
  //     'Accept': 'application/json',
  //     'Client-ID': '8sw09jo6mw0fbzr8218zktyvhg5nol',
  //     'Authorization': 'Bearer 733r2i8fm28grd49y5sywir1tl069y',
  //   }
  // }
  //
  // axios.post("ttps://api.igdb.com/v4/games", params, config)
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })

//
  const corsUrl = "http://0.0.0.0:8080/";


//   axios({
//   url: corsUrl+"https://api.igdb.com/v4/games",
//   method: 'POST',
//   headers: {
//       'Accept': 'application/json',
//       'Client-ID': '8sw09jo6mw0fbzr8218zktyvhg5nol',
//       'Authorization': 'Bearer 733r2i8fm28grd49y5sywir1tl069y',
//   },
//   data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
// })
//   .then(response => {
//       console.log(response.data);
//   })
//   .catch(err => {
//       console.error(err);
//   });
  const [paging, setPaging] = useState(1);
  const [games, setGames] = useState();


  useEffect(() => {
    const getData = async () => {

        const resp = await axios({
        // url: corsUrl+"https://api.igdb.com/v4/release_dates",
        url: corsUrl+"https://api.igdb.com/v4/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Client-ID': '8sw09jo6mw0fbzr8218zktyvhg5nol',
            'Authorization': 'Bearer 733r2i8fm28grd49y5sywir1tl069y',
        },
        data: 'fields name;search "Halo";'
        // data: "fields date,game ,y ; sort date desc ;where date < 1616522142; "
      });
      console.log(resp.data);
      setGames(resp.data);


    }
    getData();
  }, [paging]);


  ////////////////
  ////////////////data: "fields name,follows,rating; sort follows desc; where follows != null; "
  ////////////////data: "fields date,game ,y ; sort date desc ;where date < "+String(Math.round((new Date()).getTime() / 1000))+"; "
  ////////////////data: 'fields name;search "Halo";'
  ////////////////
  ////////////////
  ////////////////

  console.log("test" ,games);

  const nxtpg = () => {
      setPaging(paging+1);
  }


  return (
    (!games)?
    <>
    loading ...
    </>
    :
    <div className="App">
    test {paging} <a onClick={nxtpg} >click</a>
    <br/>
    {games.map( (g) =>
      (
      <div>{g.name}</div>
    ) )}
    </div>
  );
}

export default App;
