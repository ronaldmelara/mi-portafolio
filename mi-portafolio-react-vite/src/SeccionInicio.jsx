import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function SeccionInicio(){

    return (
        <section id="inicio">
            <div class="contenido">
                <header>
                    <div class="contenido-header">
                        <h1>/RM/</h1>
                        <nav id="nav" class="">
                            <ul id="links">
                                <li><a href="#inicio" class="seleccionado" onclick="seleccionar(this)">INICIO</a></li>
                                <li><a href="#sobremi" onclick="seleccionar(this)">SOBRE MI</a></li>
                                <li><a href="#servicios" onclick="seleccionar(this)">SERVICIOS</a></li>
                                <li><a href="#portfolio" onclick="seleccionar(this)">PORTFOLIO</a></li>
                                <li><a href="#contacto" onclick="seleccionar(this)">CONTACTO</a></li>
                            </ul>
                        </nav>

                        <div id="icono-nav" onclick="responsiveMenu()">
                            <i class="fa-solid fa-bars"></i>
                        </div>
    
    
                        <div class="redes">
                            <a href="https://www.linkedin.com/in/ronaldmelara/" target="_blank" ><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/ronaldmelara" target="_blank"><i class="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/lente.estiloso/" target="_blank"><i class="fa-brands fa-instagram-square"></i></a>
                        </div>
                    </div>
                </header>
                <div class="presentacion">
                    <p class="bienvenida">Bienvenidos/Welcome</p>
                    <h2>Soy <span>Ronald Melara</span>, Desarrollador Web</h2>
                    <h4>I am <span>Ronald Melara</span>, Web Developer</h4>
                    <p class="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, </p>
                    <a href="#portfolio">Ir a Portafolio</a>
                </div>
            </div>
        </section>

    )
}
export default SeccionInicio