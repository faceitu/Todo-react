import React from 'react'
import {CardContainer,Imgcontainer,InfoContainer,Imgstyled,Spanstyled,InputStyled,GeneralContainer} from './pokemoncardstyled'
import  { useEffect, useState } from 'react';
import axios from 'axios'


const  fetchPokemon = async (e,pokemon,setPokeselected) => {
   
    e.preventDefault()
    
    try {
        let selectedPokemon = pokemon.toLowerCase().trim();
       
        const pokemonList = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
       
        setPokeselected(pokemonList.data)
        console.log(pokemonList.data)
      
      } catch (error) {
        
      }
   
    };
  
   const initialpokemon = {
    name: 'pokemon',
    weight:0,
    types: [
        {type:'green'},      
    ],
    abilities: [
        {ability:{name:''}},      
    ]

   } 

const Pokemoncard = () => {
  
    const [pokemon,setPokemon] = useState('')
    const [pokeselected, setPokeselected] = useState(initialpokemon)
  
    return (
       <>            
        <form onSubmit={e => fetchPokemon(e,pokemon,setPokeselected)} >
             <GeneralContainer>
                <Spanstyled>Buscar pokemon</Spanstyled>
                <InputStyled onChange={(e => setPokemon(e.target.value))} type="text" placeholder='Buscar Pokemon' value={pokemon} />
            </GeneralContainer>
        </form>
   

        <CardContainer color = {pokeselected.types[0].type.name}>
            <Imgcontainer>
            { pokeselected.sprites ? 
             <img src={pokeselected.sprites?.other.home.front_default} alt="" /> :
             <img src="../../pokeball.png" alt=""/>



        }
            </Imgcontainer >
             <InfoContainer  >
                <h1>{pokeselected.name}</h1>
                <h2>Peso: {pokeselected?.weight}</h2>
                <h2>Tipo: { pokeselected.types[0].type.name} </h2>
                <h2>Habilidad: {pokeselected.abilities[0].ability.name}</h2>
            </InfoContainer>
        </CardContainer>
 
        </>
   
  )
}

export default Pokemoncard