import { useState, useEffect, createContext } from 'react';
import API_KEY from '../config';
import axios from 'axios'

const ImagenesContext = createContext()

const ImagenesProvider = ({children}) => {

    const [imagenes, setImagenes] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() =>{
        const imagenesRandom = async() =>{
            try {
                const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=1`)
                /* console.log(response.data) */
                setImagenes(response.data)
            } catch (error) {
               setError(error) 
            }
        }
        imagenesRandom()
    },[])

    return(
        <ImagenesContext.Provider
            value={{
                imagenes,
                setImagenes
            }}
        >
            {children}
        </ImagenesContext.Provider>
    )
}


export {
    ImagenesProvider
}

export default ImagenesContext