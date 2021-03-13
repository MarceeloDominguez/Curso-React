import React from 'react'

export default function PokemonHook({ name, avatar }) {
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}