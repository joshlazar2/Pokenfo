import './App.css';
import React, { useState } from 'react';
import {Routes, Route, Link, Naviagte} from 'react-router-dom';
import Search from './components/Search'
import Display from './components/Display'
import MoreInfo from './components/MoreInfo';

function App() {

  const [pokemonSearch, setPokemonSearch] = useState('')
  const [pokemonInfo, setPokemonInfo] = useState(null)
  const [pokemonError, setPokemonError] = useState(false)

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <Search pokemonSearch={pokemonSearch} setPokemonSearch={setPokemonSearch} pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo} pokemonError={pokemonError} setPokemonError={setPokemonError} />
      <Routes>
        <Route path='/' element={pokemonInfo && <Display pokemonInfo={pokemonInfo} setPokemonInfo={setPokemonInfo}/>} />
        {/* <Route path='/moreInfo/:pokemon' element={<MoreInfo />} /> */}
      </Routes>
    </div>
  );
}

export default App;
