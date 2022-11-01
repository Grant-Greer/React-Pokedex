import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokedex from './Pokedex'
import PokemonInfoTile from './components/PokemonInfoTile'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/pokemon/:id' component={PokemonInfoTile} />
          <Route path='/' component={Pokedex} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;