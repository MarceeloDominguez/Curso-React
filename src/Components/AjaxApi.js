import React, { Component } from 'react'
import Pokemon from './Pokemon'

export class AjaxApi extends Component {

    state = {
        pokemons: []
    }

    // componentDidMount() {
    //     let url = 'https://pokeapi.co/api/v2/pokemon/'
    //     fetch(url)
    //         .then((res) => res.json())
    //         .then((json) => {
    //             //console.log(json)
    //             json.results.forEach(el => {
    //                 fetch(el.url)
    //                     .then((res) => res.json())
    //                     .then((json) => {
    //                         //console.log(json)
    //                         let pokemon = {
    //                             id: json.id,
    //                             name: json.name,
    //                             avatar: json.sprites.front_default
    //                         }
    //                         let pokemons = [...this.state.pokemons, pokemon]
    //                         this.setState({
    //                             pokemons: pokemons
    //                         })
    //                     })
    //             })
    //         })
    // }

    // async componentDidMount() {
    //     let url = await fetch('https://pokeapi.co/api/v2/pokemon/')
    //     let json = await url.json()

    //     json.results.forEach(async el => {
    //         let res = await fetch(el.url)
    //         let json = await res.json()
    //         //console.log(json)
    //         let pokemon = {
    //             id: json.id,
    //             name: json.name,
    //             avatar: json.sprites.front_default
    //         }
    //         //console.log(pokemon)
    //         let pokemons = [...this.state.pokemons, pokemon]
    //         this.setState({ pokemons: pokemons }) 
    //     })
    // }

    render() {
        return (
            <div>
                <h2>Pokemon con class</h2>
                {
                    this.state.pokemons.length === 0 ? (<h3>Cargando...</h3>) : (this.state.pokemons.map(el => <Pokemon name={el.name} avatar={el.avatar} key={el.id} />))
                }
            </div>
        )
    }
}

export default AjaxApi
