import React, { Component } from 'react'

export class ElementosLista extends Component {
    render() {
        const { el } = this.props 
        return (
            <li>
                <a href={el.web} target='_blank'>{el.name}</a>
            </li>
        )
    }
}

export default ElementosLista
