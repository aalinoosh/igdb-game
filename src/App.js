import React, { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Recent from './components/Recent/Recent';
import Singlegame from './components/Singlegame/Singlegame';
import Listgame from './components/Listgame/Listgame';
import './App.css';
import './index.css';



const App = () => {


  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path="/search" exact component={Search} />
            <Route path="/recent" exact component={Recent} />
            <Route path="/" exact component={Listgame} />
            <Route path="/game/:id" component={Singlegame} />

            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );


}


export default App;
