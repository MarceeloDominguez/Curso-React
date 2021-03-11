import React, { Component } from 'react'
import data from '../helpers/data.json'
import ElementosLista from './ElementosLista'

export class RenderCondicional extends Component {
    render() {
        console.log(data)
        return (
            <div>
                <ul>
                    {
                        data.frameworks.map(el => <ElementosLista el={el} key={el.id}/>)
                    }
                </ul>
            </div>
        )
    }
}

export default RenderCondicional
