
import ListJobs from './jobsComponents/ListJobs';
import LisProjects from './jobsComponents/ListProjects';

function Jobs(){
    return (
        <>
        <section id="portfolio">
            <h3 className="titulo-seccion">Proyectos</h3>
            <br/>
            <p className='d-flex justify-content-center' id="description-portafolio">Estas son algunas de las compañías con las que he tenido la oportunidad de trabajar y que han confíado en mi:</p>

           <ListJobs/>

            <br/>
            <p className='d-flex justify-content-center' id="description-portafolio">Mis proyectos personales:</p>


            <div className="fila">

                <LisProjects/>

                
            </div>

        </section>
        
        </>

    )
}

export default Jobs