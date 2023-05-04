import { useEffect, useState } from 'react'

function Footer(){
    return(

        <>
        <footer>
        <p>Todos los derechos reservados - 2023</p>
        <div className="redes">
            <a href="https://www.linkedin.com/in/ronaldmelara/" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/ronaldmelara" target="_blank"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/lente.estiloso/" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
        </div>

    </footer>
        </>
    )

}

export default Footer