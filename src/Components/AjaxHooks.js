import React, { useEffect, useState } from 'react'
import PokemonHook from './PokemonHook'

export default function AjaxHooks() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        // let url = 'https://pokeapi.co/api/v2/pokemon/'
        // fetch(url)
        //     .then((res) => res.json())
        //     .then((json) => {
        //         //console.log(json)
        //         json.results.forEach(el => {
        //             fetch(el.url)
        //                 .then((res) => res.json())
        //                 .then((json) => {
        //                     //console.log(json)
        //                     let pokemon = {
        //                         id: json.id,
        //                         name: json.name,
        //                         avatar: json.sprites.front_default
        //                     }

        //                     setPokemons((pokemons) => [...pokemons, pokemon])
        //                 })
        //         })
        //     })

        const getPokemon = async () => {
            let url = await fetch('https://pokeapi.co/api/v2/pokemon/')
            let json = await url.json()

            json.results.forEach(async el => {
                let res = await fetch(el.url)
                let json = await res.json()
                //console.log(json)
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }
                //console.log(pokemon)
                setPokemons((pokemons) => [...pokemons, pokemon])
            })
        }
        getPokemon()

    }, [])

    return (
        <div>
            <h2>Pokemon con Hooks</h2>
            {
                pokemons.length === 0 ? (<h3>Cargando...</h3>) : (pokemons.map(el => <PokemonHook name={el.name} avatar={el.avatar} key={el.id} />))
            }
        </div>
    )
}