import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function SeccionSobreMi(){
    return (
    <>
    <section id="sobremi">
        <div class="contenedor-foto">
            <img src="../src/assets/foto.jpg" alt=""/>
        </div>
        <div class="sobremi">
            <p class="titulo-seccion">Sobre Mi/About Me</p>
            <h2>Hola, Soy <span>Ronald Melara</span> </h2>
            <h3>Desarrollador Senior</h3>
            <p>Más de 14 años de experiencia en desarrollo de proyectos de diversos rubros: Sector Público, Banca, Farmacéutica, etc. He participado desde el diseño, hasta puesta en marcha en ambientes productivos de aplicaciones Web, Servicios REST, App Móvil, entre otros.</p>
            <p>Además, cuento con experiencia en equipos de Desarrollo Agile, como equipo bajo metodologías tradicionales. </p>
            <p>Soy un elemento proactivo, con facilidad de aprender nuevas tecnologías en corto plazo, buen trato, trabajo en equipo. Mi buen desenpeño, me ha hecho destacar en organizaciones como uno de los desarrolles con mejor nivel de productivad y también ha permitido que desarrolles 
                el rol de Scrum Master, TL y apoyo técnico al Product Owner. </p>
            <p><br/>
            ¿Cúales son mi hobbies? Soy músico, toco el piano y el saxofón desde mi adolecencia. También desarrollé talento para el dibujo y la pintura que trabajé desde mi niñez. En los últimos años he desarrollado habilidades para la construcción casera, donde mi facilidad de aprender me ha permitido hacer trabajo profesionales en casa.
            </p>
            <a href="#">Descargar CV</a>
        </div>
    </section>
    </>

    )
}

export default SeccionSobreMi