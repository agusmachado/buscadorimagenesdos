import useImagenes from "../hooks/useImagenes"
import { Box, Grid, Card, CardBody, Image, Heading, Text, Stack, HStack, Tag, TagLabel, Divider, CardFooter, Flex, Avatar, AspectRatio } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




const CardComponente = () => {

  const { imagenes, buscarImagenes } = useImagenes();
  console.log(imagenes)
  

  const handleSearch = async (busquedaTag) => {
    await buscarImagenes(busquedaTag); 
  }; 

return (
    <Box>
       <Grid templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} gap={4} mt={8}>
        {imagenes.map((imagen) =>(
          <Card
            key={imagen.id}  
          >
          <CardBody>
            <AspectRatio ratio={1}>
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
              <strong>Cámara:</strong> {imagen.exif?.name || 'No disponible'}
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
                    onClick={() => handleSearch(tag.title)} 
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