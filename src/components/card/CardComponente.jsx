import useImagenes from "../hooks/useImagenes"
import { Box, Grid, Card, CardBody, Image, Heading, Text, Stack, HStack, Tag, TagLabel, Divider, CardFooter, Flex, Avatar, AspectRatio } from '@chakra-ui/react';
import API_KEY from '../config'
import { useEffect, useState } from "react";
import axios from "axios";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';





const CardComponente = () => {

  // Traigo las imagenes y la función buscarImagenes que están en el context y pasan por el hook
  const { imagenes, buscarImagenes } = useImagenes()
 /*  console.log(imagenes) */

 const [camaras, setCamaras] = useState([]);
  const [error, setError] = useState(null);
  
  // Activo la búsqueda cada vez que hago click en un tag
  const activarBusqueda = async (busquedaTag) => {
    await buscarImagenes(busquedaTag); 
  }; 


 // Creamos un useEffect para acceder a la cámara de cada imagen. Tenemos que hacerlo así, porque la API de search no tiene la propiedad exif, que es la que contiene los datos de la cámara.
 useEffect(() => {
  const obtenerCamaras = async () => {
    try {
      const ids = imagenes.map((imagen) => imagen.id);
      const responses = await Promise.all(
        ids.map((id) =>
          axios.get(`https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`)
        )
      );
      const camaras = responses.map((response) => response.data?.exif?.model || 'No disponible');
      setCamaras(camaras);
    } catch (error) {
      setError(error);
    }
  };

  obtenerCamaras();
}, [imagenes]);
  
  
  

return (
    <Box>
       <Grid templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} gap={4} mt={8}>
        {imagenes.map((imagen, index) =>(
          // Agregamos el parámetro index para pasar exif
          <Card
            key={imagen.id}  
          >
          <CardBody>
            <AspectRatio ratio={1}>
              {/* Utilizo React Lazy Load para descargar las imágenes a medida que se va scrolleando hacia abaajo */}
              <LazyLoadImage
                src={imagen.urls.regular}
                width='100%'
                height='100%'
              />
            </AspectRatio>
            
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{imagen.alt_description.toUpperCase()}</Heading>
            </Stack>

            
            <Text>
              <strong>Ubicación:</strong> {imagen.user?.location || 'No disponible'}
            </Text>
            <Text>
              <strong>Cámara:</strong>  {camaras[index] || 'No disponible'}
            </Text>
          </CardBody>   
            
            
            <Divider />
            
                      
          <CardFooter>
                      
                              
               
              <HStack spacing={4}>
                { imagen.tags && 
                  Array.isArray(imagen.tags) && 
                  imagen.tags.map((tag, index) => (
                    // Se valida que imagen.tags sea válido y sea un array
                    // Si existe y es un array, entonces hace el mapeo
                  <Tag
                    size="sm"
                    key={index}
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                    onClick={() => activarBusqueda(tag.title)} 
                    // En el onClick colocamos una función anónima para que no se ejecute un bucle infinito. Sólo se va a ejecutar cuando se haga click.                   
                    cursor="pointer"
                  >
                    <TagLabel>{tag.title}</TagLabel>
                  </Tag>

                ))}
              </HStack>

              
         </CardFooter>   
        </Card>
        ))}
              
      </Grid>
    </Box>
  );
};


export { CardComponente }