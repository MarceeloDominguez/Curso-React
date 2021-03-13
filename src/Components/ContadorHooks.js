// import React, { useState } from 'react'

// export default function ContadorHooks() {

//     const[contador, setContador] = useState(0)

//     const sumar = () => setContador(contador + 1)
//     const restar = () => setContador(contador - 1)

//     return(
//         <>
//         <div>contador hooks</div>
//         <button onClick={sumar}>+</button>
//         <button onClick={restar}>-</button>
//         <h3>{contador}</h3>
//         </>
//     )
// }

import React, { useState } from 'react'

export default function OffOnConHooks() {

    const[toggle, setToggle] = useState(true)

    const handleClick = () => {
        console.log('click acaca')
        setToggle(!toggle)
        //setToggle(prevValue => ! prevValue)
    }

    return(
        
        <button onClick={handleClick}>
            {toggle ? 'Encendido' : 'Apagado'}
        </button>
    )
}

//toggle !== toggle 

