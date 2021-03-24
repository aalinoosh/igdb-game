import React  from 'react';


// const Genres = ( { genres } ) => {
//
//
//   return (
//     <div  >
//     {genres.map( (g) =>
//       (
//       <div>.</div>
//     ) )}
//     </div>
//   );
// }


const Game = ({ game }) => {


  let coverUrl = "https:"+game.cover.url;
  coverUrl = coverUrl.replace("t_thumb","t_cover_big")

  return (
    <div className="lg-col-3 md-col-3 debug m2 p2"  >
      <img src={coverUrl} alt={game.name} />
      Name: {game.name}
      <br/>
      follows: {game.follows}
      <br/>
      Genres: {game.genres[0].name}
      <br/>

    </div>
  );
}

export default Game;
