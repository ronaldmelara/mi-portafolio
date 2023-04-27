import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function seleccionar(link, event) {
    let ele = link.target;
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    ele.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

function SeccionInicio(){

    return (<>
        <section id="inicio">
            <div className="contenido">
                <header>
                    <div className="contenido-header">
                        <h1>/RM/</h1>
                        <nav id="nav" className="">
                            <ul id="links">
                                <li><a href="#inicio" className="seleccionado" onClick={seleccionar}>INICIO</a></li>
                                <li><a href="#sobremi" onClick={seleccionar}>SOBRE MI</a></li>
                                <li><a href="#skills" onClick={seleccionar}>SKILLS</a></li>
                                <li><a href="#portfolio" onClick={seleccionar}>PROYECTOS</a></li>
                                <li><a href="#contacto" onClick={seleccionar}>CONTACTO</a></li>
                            </ul>
                        </nav>

                        <div id="icono-nav" onclick="responsiveMenu()">
                            <i className="fa-solid fa-bars"></i>
                        </div>
    
    
                        <div className="redes">
                            <a href="https://www.linkedin.com/in/ronaldmelara/" target="_blank" ><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/ronaldmelara" target="_blank"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/lente.estiloso/" target="_blank"><i className="fa-brands fa-instagram-square"></i></a>
                        </div>
                    </div>
                </header>
                <div className="presentacion">
                    <p className="bienvenida">Bienvenidos/Welcome</p>
                    <h2>Soy <span>Ronald Melara</span>, Desarrollador Web</h2>
                    <h4>I am <span>Ronald Melara</span>, Web Developer</h4>
                    <p className="descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, </p>
                    <a href="#portfolio">Ir a Portafolio</a>
                </div>
            </div>
        </section>
        </>
    )
}
export default SeccionInicio