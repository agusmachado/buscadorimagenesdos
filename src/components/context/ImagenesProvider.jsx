import { useState, useEffect, createContext } from 'react';
import API_KEY from '../config'; // Traigo la KEY desde un archivo externo, cosa de tenerla disponible en todos los componentes
import axios from 'axios';

const ImagenesContext = createContext();

const ImagenesProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);
  const [error, setError] = useState(null);

  // Escribo el useEffect para traer las imágenes random que se cargarán una sola vez cuando se inicie la página.

  useEffect(() => {
    const obtenerImagenesRandom = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=20`
        );
        setImagenes(response.data);
      } catch (error) {
        setError(error);
      }
    };

    obtenerImagenesRandom();
  }, []);

  // Creo la función para buscar las imágenes dentro de UNSPLASH. Esta función será llamada a través del evento onClick y el resultado reemplazará la búsqueda random. 

  const buscarImagenes = async (busqueda) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${busqueda}&per_page=20&orientation=landscape`
      );
      setImagenes(response.data.results);
    } catch (error) {
      setError(error);
    }
  };

 /*  console.log(imagenes); */

  // En el return paso las imagenes y la función para buscar en la API, de modo que estén disponibles en el resto de los componentes.

  return (
    <ImagenesContext.Provider
      value={{
        imagenes,
        buscarImagenes
      }}
    >
      {children}
    </ImagenesContext.Provider>
  );
};

export { ImagenesProvider };
export default ImagenesContext;



