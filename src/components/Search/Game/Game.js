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
    <div className="lg-col-3 md-col-3 sm-col-6 xs-col-12" >
       <div className="bg-gr-d card m4 over-hide box-shadow">

          <img   className="responsive  card-pic " src={coverUrl} alt={game.name} />
           
          <div className="bg-gr-d p2">
              
              <p className="line-h"> Name: {game.name} </p>
                
              <p className="line-h" > Genres: {game.genres[0].name}</p>
              
            </div>
       </div>
    </div>
  );
}

export default Game;
