//import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
//import {getGifs} from '../helpers/getGifs';

export const GifGrid = ({categorias}) => {


    /*const [image, setimage] = useState([]);

    useEffect(()=>{
        getGifs(categorias)
        .then(setimage);
    },[categorias]);*/

    const {data:image, loading} = useFetchGifs(categorias);

  return (
    <>
    <h3 className='card animate__animated animate__fadeIn'>{categorias}</h3>
    {loading && <p className='card animate__animated animate__flash'>Cargando !!!</p>}
    <div className='card-grid'>
        {
          image.map(img =>(
                <GifGridItem
                key={img.id}
                {...img} />
        ))
        }
    </div>
    </>
  )
}


