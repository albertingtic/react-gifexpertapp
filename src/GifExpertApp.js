import React, { useState } from 'react'
import { AddCategorias } from './componentes/AddCategorias';
import { GifGrid } from './componentes/GifGrid';




export const GifExpertApp = () => {
    //const categorias = ['One Punch','Samurai X','Dragon Ball'];

    const [categorias, setCategorias] = useState(['Dragon Ball']);

    /*const handleAdd = () =>{
        //setCategorias([...categorias,'HunterXHunter']);
        setCategorias(cats => [...categorias,'HunterXHunter']);
    }
    <button onClick={handleAdd} >Agregar</button>
    */

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategorias setCategorias = {setCategorias} />
    <hr/>
    
    <ol>
        {
            categorias.map(categorias => (
                /*return <li key={categorias}>{categorias}</li>*/
                <GifGrid 
                key = {categorias}
                categorias = {categorias}
                />))
        }
    </ol>



    </>
  )
}
