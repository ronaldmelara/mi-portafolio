import { useState } from 'react'


const AboutMe = () => {
    const title = "Sobre Mi/About Me";
    const greeting = "Hola, soy ";
    const name = "Ronald Melara";
    const position = "Desarrollador Senior";
    const text1 = "Más de 14 años de experiencia en desarrollo de proyectos de diversos rubros: Sector Público, Banca, Farmacéutica, etc. He participado desde el diseño, hasta puesta en marcha en ambientes productivos de aplicaciones Web, Servicios REST, App Móvil, entre otros.";
    const text2 = "Además, cuento con experiencia en equipos de Desarrollo Agile, como equipo bajo metodologías tradicionales.";
    const text3 = "Soy una persona proactivo, con facilidad de aprender nuevas tecnologías en corto plazo, buen trato, trabajo en equipo. Mi buen desenpeño, me ha hecho destacar en organizaciones como uno de los desarrolles con mejor nivel de productivad y también ha permitido que desarrolle el rol de Scrum Master, TL y apoyo técnico al Product Owner.";
    const hobbies="¿Cúales son mi hobbies? Soy músico, toco el piano y el saxofón desde mi adolecencia. También desarrollé talento para el dibujo y la pintura que trabajé desde mi niñez. En los últimos años he desarrollado habilidades para la construcción casera, donde mi facilidad de aprender me ha permitido hacer trabajo profesionales en casa.";

    return (
    <>
    <section id="sobremi">
        <div className="contenedor-foto">
            <img src="../src/assets/foto.jpg" alt=""/>
        </div>
        <div className="sobremi">
            <p className="titulo-seccion">{title}</p>
            <h2>{greeting}<span>{name}</span> </h2>
            <h3>{position}</h3>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p><br/>
            {hobbies}
            </p>
            <a href="#">Descargar CV</a>
        </div>
    </section>
    </>

    )
}

export default AboutMe