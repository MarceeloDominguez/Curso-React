import React, { Component } from 'react'

export class OffOn extends Component {

    constructor(props){
        super(props)

        this.state = {
            isToggleOn: true
        }
    }

    handleClick(){
        console.log('clcik')
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'Encendido' : 'Apagado'}
            </button>
        )
    }
}

export default OffOn
