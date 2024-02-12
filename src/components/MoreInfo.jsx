import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MoreInfo = ({ pokemonInfo }) => {

    const { pokemon } = useParams();

    const [morePokemonInfo, setMorePokemonInfo] = useState({})

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
            .then((res) => {
                setMorePokemonInfo(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='mt-8'>
            <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center space-y-3 bg-white p-10 rounded-2xl shadow-2xl'>
                    <h2 className='text-2xl'>{morePokemonInfo.name}</h2>
                    <img className='w-40' src={morePokemonInfo.sprites.front_default} alt="pokemon_image" />
                    <div className='flex space-x-2'>
                        <label className='font-bold'>Type:</label>
                        <p>{morePokemonInfo.types.map((type) => type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)).join(', ')}</p>
                    </div>
                    <div className='flex space-x-2'>
                        <label className='font-bold'>Base Experience:</label>
                        <p>{morePokemonInfo.base_experience}</p>
                    </div>
                    <div className='flex space-x-2'>
                        <label className='font-bold'>Abilities:</label>
                        <p>{morePokemonInfo.abilities.map((ability) => ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)).join(', ')}</p>
                    </div>
                    <div className='flex space-x-2'>
                        <label className='font-bold'>Height:</label>
                        <p>{morePokemonInfo.height} m</p>
                    </div>
                    <div className='flex space-x-2'>
                        <label className='font-bold'>Weight:</label>
                        <p>{morePokemonInfo.weight} kg</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;
