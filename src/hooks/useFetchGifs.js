import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (categorias) => {

    const [state, setstate] = useState({
        data:[],
        loading: true
    });


    useEffect(() => {
        getGifs(categorias).then(imgs => {
            setTimeout(()=>{
                setstate({
                    data:imgs,
                    loading:false
                });
            },3000);
        })
    }, [categorias])
    
    return state;
}