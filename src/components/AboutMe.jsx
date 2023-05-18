import { useState } from 'react'


const AboutMe = () => {
    const title = "Sobre Mi/About Me";
    const greeting = "Hola, soy ";
    const name = "Ronald Melara";
    const position = "Desarrollador FullStack";
    const text1 = "Desde 2008 he trabajado para en proyectos de diversos rubros: Sector Público, Banca, Farmacéutica, etc. He trabajado desde las etapas tempranas de toma de requerimiento, reuniones con stakeholders, análisis y diseño, hasta codificación y puesta en marcha en ambientes productivos. Soy experto en Backend y FrontEnd!!! Son ya más de 14 años sumando experiencia recomendada.";
    const text2 = "En los últimos 5 años, en el actual equipo de desarrollo Agile donde me encuentro inserto, además de realizar el rol de Web Developer, he tenido la oportunidad de desempeñar rol de Scrum Master y TechLead de forma esporádica gracias a mi compromiso con la organización, proactividad, manejo del negocio, capacidad de liderazgo positivo, alto desempeño, facilidad de cambio y aprendizaje.";
    const text3 = "Si estas buscando profesionalidad y dedicación: Entonces, Cuenta conmigo!!";
    const hobbies="¿Que hago además de hacer coding? pues, soy músico. Toco el piano y el saxofón desde mi adolecencia. También desarrollé talento para el dibujo y la pintura que trabajé desde mi niñez. En los últimos años he desarrollado habilidades para la construcción casera, donde mi facilidad de aprender me ha permitido hacer trabajo profesionales en casa.";

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
            <a hhref="https://www.linkedin.com/in/ronaldmelara/" target="_blank">Consulta mi Currículum</a>
        </div>
    </section>
    </>

    )
}

export default AboutMe