import React, { Component } from 'react'

export class CicloDeVida extends Component {

    // constructor(props){
    //     super(props)

    //     this.state = {
    //         hora: new Date().toLocaleTimeString()
    //     }
    // }

    state = {
        hora: new Date().toLocaleTimeString(),
        temporizador: null
    }

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps)
        console.log(prevState)
    }

    iniciar = () => {
        console.log('iniciar')
        //let temporizador = null 
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    detener = () => {
        console.log('detener')
        clearInterval(this.temporizador)
    }

    render() {
        //console.log(this.state.hora)
        return (
            <div>
                {this.state.hora}
                <button onClick={this.iniciar}>Iniciar</button>
                <button onClick={this.detener}>Detener</button>
            </div>
        )
    }
}

export default CicloDeVida
