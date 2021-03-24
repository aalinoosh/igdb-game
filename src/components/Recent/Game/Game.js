import React  from 'react';



const Game = ({ row }) => {


  let coverUrl = "https:"+row.game.cover.url;
  coverUrl = coverUrl.replace("t_thumb","t_cover_big")

  return (
    <div className="lg-col-3 md-col-3 debug m2 p2"  >
      <img src={coverUrl} alt={row.game.name} />
      <br/>
      Name: {row.game.name}
      <br/>
      Genres: {row.game.genres[0].name}
      <br/>

    </div>
  );
}

export default Game;
