import React  from 'react';

const Game = ({ game }) => {

  // console.log(game);
  let coverUrl = "https:"+game.cover.url;
  coverUrl = coverUrl.replace("t_thumb","t_cover_big")

  let screenUrl = "https:"+game.screenshots[0].url;
  screenUrl = screenUrl.replace("t_thumb","t_screenshot_huge")

  ///
  console.log(game.involved_companies);
  const developer = game.involved_companies.find( a => a.developer === true)
  console.log(developer);

  return (
    <div className=" debug m2 p2"  >
      <img src={screenUrl} alt={game.name} />
      <br/>
      <img src={coverUrl} alt={game.name} />
      <br/>
      Name: {game.name}
      <br/>
      follows: {game.follows}
      <br/>
      Genres: {game.genres[0].name}
      <br/>
      Company Name: {developer.company.name}
      <br/>

    </div>
  );
}

export default Game;
