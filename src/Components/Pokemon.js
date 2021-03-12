// import React, { Component } from 'react'

// export class Pokemon extends Component {
//     render() {

//         const { name, avatar } = this.props

//         return (
//             <figure>
//                 <img src={avatar} all={name}/>
//                 <figcaption>{name}</figcaption>
//             </figure>
//         )
//     }
// }

// export default Pokemon

import React from 'react'

function Pokemon(props) {
    const { name, avatar } = props
    return (
        <figure>
            <img src={avatar} all={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default Pokemon
