
import { useEffect, useState } from 'react'
import projects from './projects.json'

const LisProjects = () => {
    const [listProjects, setListProjects] = useState([]);
    useEffect(()=> {
        setListProjects(projects);
     },[])
 
     return(

        <>
            {listProjects.map((item) => (
               
               <div key={item.id} id={`proyecto-${item.id}`} className="proyecto">
                   <div id={`overlay-${item.id}`}  className="overlay"></div>
                   <img id={`img-${item.id}`} src={item.image} alt=""/>
                   <div id={`info-${item.id}`} className="info">
                       <h4>{item.description}</h4>
                       <p>{item.name}</p>
                   </div>
               </div>
               ))}
        </>
     )
}

export default LisProjects