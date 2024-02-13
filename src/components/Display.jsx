import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Display = ({pokemonInfo, setPokemonInfo}) => {

    const shinyHandler = () => {
        setPokemonInfo({...pokemonInfo, shiny: !pokemonInfo.shiny})
    }

    return(
        <div className='mt-8'>
            <div className='flex items-center justify-center'>
                {/* <Link to={`/moreInfo/${pokemonInfo.name}`}> */}
                    <div className='flex flex-col items-center space-y-3 bg-white p-10 rounded-2xl shadow-2xl'>
                        <h2 className='text-2xl'>{pokemonInfo.name}</h2>
                        {
                            pokemonInfo.shiny ? <img className='w-40' src={pokemonInfo.sprites.front_shiny} alt="pokemon_image" /> :
                            <img className='w-40' src={pokemonInfo.sprites.front_default} alt="pokemon_image" />
                        }
                        {
                            pokemonInfo.shiny ? <button onClick={shinyHandler} className='bg-blue-500 text-white p-2 rounded-xl mb-5'>Non-Shiny</button> : <button onClick={shinyHandler} className='bg-blue-500 text-white p-2 rounded-xl mb-5'>Shiny</button>
                        }
                        <div className='flex space-x-2'>
                            <label className='font-bold'>Type:</label>
                            <p>{pokemonInfo.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ')}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <label className='font-bold'>Base Experience:</label>
                            <p>{pokemonInfo.baseExperience}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <label className='font-bold'>Abilities:</label>
                            <p>{pokemonInfo.abilities.map((ability) => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)).join(', ')}</p>
                        </div>
                        <div className='flex space-x-2'>
                            <label className='font-bold'>Height:</label>
                            <p>{pokemonInfo.height} m</p>
                        </div>
                        <div className='flex space-x-2'>
                            <label className='font-bold'>Weight:</label>
                            <p>{pokemonInfo.weight} kg</p>
                        </div>
                    </div>
                {/* </Link> */}
            </div>
        </div>
    );
}

export default Display;