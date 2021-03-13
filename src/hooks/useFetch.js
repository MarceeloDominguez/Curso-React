import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async (url) => {
            try {
                let res = await fetch(url)

                if (!res.ok) {
                    throw {
                        error: true,
                        status: res.status,
                        statusText: !res.statusText ? 'Ocurrio un error' : res.statusText
                    }
                }

                let data = await res.json()
                data.results.forEach(async el => {
                    let res = await fetch(el.url)
                    let data = await res.json()
                    // console.log(data)

                    let pokemon = {
                        id: data.id,
                        name: data.name,
                        avatar: data.sprites.front_default
                    }
                    //console.log({pokemon})

                    setData(pokemons => [...pokemons, pokemon])
                })
            
                //setData(pokemon)
                setIsPending(false)
                setError({ error: false })

            } catch (error) {
                setIsPending(true)
                setError(error)
                setData([])
            }
        }

        getData(url)

    }, [url])

    return { data, isPending, error }
}