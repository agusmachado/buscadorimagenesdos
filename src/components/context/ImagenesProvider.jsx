import React, { useState, useEffect, createContext } from 'react';
import API_KEY from '../config';
import axios from 'axios';

const ImagenesContext = createContext();

const ImagenesProvider = ({ children }) => {
  const [imagenes, setImagenes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerImagenesRandom = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=1`
        );
        setImagenes(response.data);
      } catch (error) {
        setError(error);
      }
    };

    obtenerImagenesRandom();
  }, []);

  const buscarImagenes = async (busqueda) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?client_id=${API_KEY}&query=${busqueda}`
      );
      setImagenes(response.data.results);
    } catch (error) {
      setError(error);
    }
  };

  console.log(imagenes);

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



