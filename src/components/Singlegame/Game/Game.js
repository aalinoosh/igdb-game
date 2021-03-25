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
    <div className="  lg-col-12 md-col-12 sm-col-12 xs-col-12 box-b my4"  >

  

      <img  className=" blur responsive z-1   xs-hide  sm-hide md-hide box-r"  src={screenUrl} alt={game.name} />
        <div className="bg-gr-d  card-h  lg-col-12 md-col-12 sm-col-12 xs-col-12  p-20 box-r " >
          <div className="flex flex-wrap relative ">
              <div className=" lg-col-3  md-col-4 sm-col-12 xs-col-12  py4">
                    <img className=" pl4 p-21  xs-max-w   " src={coverUrl} alt={game.name} />
              </div>
           <div className=" lg-col-9 md-col-8 sm-col-12 xs-col-12 p4 xs-p0 ">
           <section className=" half-black  lg-col-4 md-col-11 sm-col-12 xs-col-11 p4 m4 p-22  xs-m0 xs-p0  ">
                 <br/>
                  Name: {game.name}
                  <br/>
                  follows: {game.follows}
                  <br/>
                  Genres: {game.genres[0].name}
                  <br/>
                  Company Name: {developer.company.name}
                  <br/>

             </section>
                
           
             <p className="p3" > fixed 0 of 1 vulnerability in 2004 scanned packages
                1 vulnerability required manual review and could not be updated
              mary@DoTravel-Contents-MacBook-Pro igdb-game % node server.js
              1 vulnerability required manual review and could not be updated
              mary@DoTravel-Contents-MacBook-Pro igdb-game % node server.js
              Running CORS Anywhere on 0.0.0.0:8080</p>
              <p className="p3" > fixed 0 of 1 vulnerability in 2004 scanned packages
                1 vulnerability required manual review and could not be updated
                1 vulnerability required manual review and could not be updated
              mary@DoTravel-Contents-MacBook-Pro igdb-game % node server.js
              mary@DoTravel-Contents-MacBook-Pro igdb-game % node server.js
              Running CORS Anywhere on 0.0.0.0:8080</p>
              

              
             </div>
            </div>

          

      
   
      
      

      </div>
     
      

    </div>


  );
}

export default Game;
