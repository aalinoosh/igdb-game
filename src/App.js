
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


  axios({
  url: "https://api.igdb.com/v4/games",
  method: 'POST',
  headers: {
      'Accept': 'application/json',
      'Client-ID': '8sw09jo6mw0fbzr8218zktyvhg5nol',
      'Authorization': 'Bearer 733r2i8fm28grd49y5sywir1tl069y',
  },
  data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
})
  .then(response => {
      console.log(response.data);
  })
  .catch(err => {
      console.error(err);
  });




  //   fetch('https://countries-274616.ew.r.appspot.com', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ query: `
  //       query {
  //         CallingCode {
  //           name
  //           countries {
  //             name
  //           }
  //         }
  //       }
  //
  //   ` }),
  //   })
  // .then(res => res.json())
  // .then(res => console.log(res.data));
  //

  console.log("test" );





  return (
    <div className="App">
    test
    </div>
  );
}

export default App;
