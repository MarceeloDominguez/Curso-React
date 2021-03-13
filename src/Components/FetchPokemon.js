import React from 'react'

export default function FetchPokemon({ name, avatar }) {
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}