import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Search = ({pokemonSearch, setPokemonSearch, pokemonInfo, setPokemonInfo, pokemonError, setPokemonError}) => {

    const changeHandler = (e) => {
        setPokemonSearch(e.target.value.toLowerCase())
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`)
            .then((res) => {
                console.log(res)
                setPokemonError(false)
                setPokemonInfo({
                    name: res.data.name.charAt(0).toUpperCase() + res.data.name.slice(1),
                    sprites: res.data.sprites,
                    types: res.data.types,
                    baseExperience: res.data.base_experience,
                    abilities: res.data.abilities,
                    height: res.data.height,
                    weight: res.data.weight,
                    shiny: false
                })
            })
            .catch((err) => {
                console.log(err)
                setPokemonInfo(null)
                setPokemonError(true)
            })
    }

    return(
        <div className='flex flex-col items-center space-y-4'>
            <img className='w-[300px] rounded-lg' src='/images/_0455b9f5-1e62-46f0-b8fb-28bdd3720f47.jpg' alt="Pokenfo Logo" />
            <form onSubmit={submitHandler}>
                <div className='flex justify-center items-center space-x-3'>
                    <input className='border border-black p-2 rounded-xl h-10' onChange={changeHandler} placeholder='Pokemon Name' type="text" name="pokemon"/>
                    <button className='bg-red-500 text-white p-3 rounded-xl hover:bg-red-600 h-10 flex justify-center items-center' type="submit">Search</button>
                </div>
                {
                    pokemonError ? <p className='mt-4 text-red-500'>Pokemon not Found, check spelling!</p> : null
                }
            </form>

        </div>
    );
}

export default Search;