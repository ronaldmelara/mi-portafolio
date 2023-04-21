import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carousel from "nuka-carousel"
import jobs from '../src/jobs.json';
import projects from '../src/projects.json'

function SeccionPortafolio(){
    const [listJobs, setListJobs] = useState([]);
    const [listProjects, setListProjects] = useState([]);

    useEffect(()=> {
       setListJobs(jobs);
       setListProjects(projects);
    },[])

    return (
        <>
        <section id="portfolio">
            <h3 className="titulo-seccion">Proyectos</h3>


            <br/>
            <p className='d-flex justify-content-center' id="description-portafolio">Estas son algunas de las compañías para las que he trabajado:</p>

            <Carousel autoplay="true" wrapAround="true" adaptiveHeight="true" withoutControls="true" animation='fade' slidesToShow={2}>

                {listJobs.map((item) => (
                <img src={ item.logo } alt={ item.company } />
                ))}
           
            </Carousel>

            <br/>
            <p className='d-flex justify-content-center' id="description-portafolio">Mis proyectos personales:</p>


            <div class="fila">

                {listProjects.map((item) => (
               
                <div class="proyecto">
                    <div class="overlay"></div>
                    <img src={item.image} alt=""/>
                    <div class="info">
                        <h4>{item.description}</h4>
                        <p>{item.name}</p>
                    </div>
                </div>
                ))}

                
            </div>

        </section>
        
        </>

    )
}

export default SeccionPortafolio