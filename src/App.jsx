import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pokedex from './Pokedex'
import PokemonInfoTile from './components/PokemonInfoTile'

const App = () => {
  const routes = [
    { path: "/", element: <Pokedex /> },
    { path: "/pokemon/:pokemonId", element: <PokemonInfoTile /> },
  ];

  return (
    <div className='App'>
     <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
    </div>
  );
};

export default App;