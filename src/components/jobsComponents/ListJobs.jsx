import { useEffect, useState } from 'react'
import Carousel from "nuka-carousel"
import jobs from './jobs.json';

const ListJobs = () => {
    const [listJobs, setListJobs] = useState([]);

    useEffect(()=> {
        setListJobs(jobs);
     },[])

     return(
        <>
         <Carousel autoplay="true" wrapAround="true" adaptiveHeight="true" withoutControls="true" animation='fade' slidesToShow={2}>

        {listJobs.map((item) => (
        <img key={item.id} src={ item.logo } alt={ item.company } />
        ))}

        </Carousel>
        </>
     )
}

export default ListJobs