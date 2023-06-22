
export const getGifs = async(categorias) => {
    const url =`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categorias)}&limit=10&api_key=jt0UPI4A1pUrV9twJLEKfNQ6CdyU0bBT`;
    const resp = await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return {
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return gifs;
}