import { useFetch } from '../hooks/useFetch'
import FetchPokemon from './PokemonHook'

export default function HooksPersonalizados() {
    //console.log(useFetch())
    let url = 'https://pokeapi.co/api/v2/pokemon/'
    let { data, isPending, error } = useFetch(url)
    //console.log(data)
    let err = JSON.stringify(error)

    return(
        <>
        <h2>Hooks personalizados</h2>
        {
            isPending === true ? (<h1>{(err)}</h1>) : (data.map((el, index) => <FetchPokemon name={el.name} avatar={el.avatar} key={index}/>))
        }
        </>
    )
}

//(<h1>{{error}}</h1>)