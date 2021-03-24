import React, { useRef, useEffect } from 'react';
import { BrowserRouter, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Navbar from './components/Navbar/Navbar';
import Featured from './components/Featured/Featured';
import Recent from './components/Recent/Recent';
import Listgame from './components/Listgame/Listgame';
import './App.css';


const App = () => {


  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path="/contact" component={Contact} />
            <Route path="/recent" component={Recent} />
            <Route path="/" component={Listgame} />
            <Route component={Notfound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );


}



function Contact() {
  return (
    <h1>This is contact page</h1>
  );
}

export default App;
