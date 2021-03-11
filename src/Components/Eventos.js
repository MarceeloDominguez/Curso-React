import React, { Component } from 'react'

export class Eventos extends Component {

    //ligar el this usando bind

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         contador: 0
    //     }

    //     this.sumar = this.sumar.bind(this) //enlace this con bind
    // }

    // sumar(){
    //     console.log('sumando')
    //     console.log(this)

    //     this.setState({
    //         contador: this.state.contador + 1
    //     })
    // }

    //ligar el this usando campos de clases o function flecha 
    
    state = {
        contador: 0
    }

    restar = () => { 
        console.log('restar')
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.sumar}>+</button>
                <button onClick={this.restar}>-</button> 
                <span>{this.state.contador}</span>
            </div>
        )
    }
}

export default Eventos
