import React  from 'react';



const Game = ({ row }) => {


  console.log (row)
  let coverUrl = "https:"+row.game.cover.url;
  coverUrl = coverUrl.replace("t_thumb","t_cover_big")

  const gameUrl = "/row/"+row.id;

  return (
    <div className="lg-col-3 md-col-3 sm-col-6 xs-col-12">
       <div className="bg-gr-d card m4 over-hide box-shadow">
            <img  className="responsive  card-pic" src={coverUrl} alt={row.game.name} />
            <div className="bg-gr-d p2">
            
            <p className="line-h"> Name: {row.game.name} </p>
           
            <p className="line-h" > {(row.game.genres)&& <div>Genres: {row.game.genres[0].name}</div>} </p>
          
            </div>
      </div>
    </div>
  );
}

export default Game;
