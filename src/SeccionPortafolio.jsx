import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Carousel from "nuka-carousel"

function SeccionPortafolio(){
    return (
        <>
        <section id="portfolio">
        <h3 className="titulo-seccion">Proyectos</h3>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-10'>
            <p>Estas son algunas de las compañías para las que he trabajado:</p>

            <Carousel autoplay="true" wrapAround="true" adaptiveHeight="true" withoutControls="true" animation='fade' slidesToShow={2}>
            <img src="../src/assets/companies/banco_estado.png" alt="Banco del Estado de Chile"/>
            <img src="../src/assets/companies/ine_chile.png" alt="Instituto Nacional de Estadísticas de Chile" />
            <img src="../src/assets/companies/kibernum.png" alt="Kibernum Chile"/>
            <img src="../src/assets/companies/novofarma_services.png" alt="Novofarma Services"/>
            <img src="../src/assets/companies/penta.png" alt="Penta Security"/>
            <img src="../src/assets/companies/tecnigen_logo.png" alt="Tecnigen"/>
            </Carousel>

       
            </div>
            <div className='col-1'></div>
            
        </div>
        <div className='row'>

        </div>

        </section>
        
        </>

    )
}

export default SeccionPortafolio