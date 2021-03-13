// import React from 'react'

// export default function Referencias() {

//     const handleToggleMenu = (e) => {

//         const menu = document.getElementById('menu')

//         if (e.target.textContent === 'Menu') {
//             e.target.textContent = 'Cerrar'
//             menu.style.display = 'block'
//         }else{
//             e.target.textContent = 'Menu'
//             menu.style.display = 'none'
//         }
//     }

//     return (
//         <>
//             <h2>Referencias</h2>
//             <button onClick={handleToggleMenu} id='menu-btn'>Menu</button>
//             <nav id='menu' style={{ display: "none" }}>
//                 <a>Home</a>
//                 <a>About</a>
//                 <a>Login</a>
//             </nav>
//         </>
//     )
// }

import React, { useRef } from 'react'

export default function Referencias() {

    let refMenu = useRef() 
    let refMenuBtn = useRef()

    const handleToggleMenu = (e) => {
        if (refMenuBtn.current.textContent === 'Menu') {
            refMenuBtn.current.textContent = 'Cerrar'
            refMenu.current.style.display = 'block'
        }else{
            refMenuBtn.current.textContent = 'Menu'
            refMenu.current.style.display = 'none'
        }
    }

    return (
        <>
            <h2>Referencias</h2>
            <button onClick={handleToggleMenu} id='menu-btn' ref={refMenuBtn}>Menu</button>
            <nav id='menu' style={{ display: "none" }} ref={refMenu}>
                <a>Home</a>
                <a>About</a>
                <a>Login</a>
            </nav>
        </>
    )
}