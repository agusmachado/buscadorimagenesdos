import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex, Box, Grid } from '@chakra-ui/react';
import { Card, CardBody, Heading, Text, Divider, Avatar, AspectRatio, Image } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import API_KEY from '../config';
import { useEffect, useState } from 'react';
import axios from 'axios'

const Buscador = () => {

    const [ imagenes, setImagenes] = useState([])
    const [ buscar, setBuscar]  = useState('')
    const [error, setError] = useState(null)

    useEffect(() =>{
        const obtenerImagenes = async ()  => {

            try{
              const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${API_KEY}&count=30`)
        
               /*  console.log(response.data)     */
                setImagenes(response.data)  
            } catch(error){
                setError(error);
            }
        }
        obtenerImagenes()
    }, [])

   
 
    
      const buscarImagenes = async () => {
           
           try{ 
            const response = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${buscar}`) 
            setImagenes(response.data.results)
            console.log(response.data.results)   
            
        } catch(error){
            setError(error);
            }
        }

        const handleBuscarClick = () => {
            buscarImagenes();
          };
        
        if (error) {
            return <p>Error de carga:{error.mensaje}</p>
        }

    return(
        <Box>            
            <Flex align="center" justify="center">
                <Stack spacing={2} w={['100%', '100%', '50%']}>
                <FormControl>
                    <InputGroup>
                    <Input
                        type="text"
                        placeholder="Ej: Paisaje, Skate, Ciudad, etc..."
                        size="lg"
                        border="none"
                        borderColor="transparent"
                        _hover={{
                        borderColor: 'darkgray'
                        }}
                        _focus={{
                        boxShadow: 'none',
                        borderColor: 'darkgray'
                        }}
                        borderBottom="2px solid darkgray"
                        onChange={(e) => setBuscar(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <IconButton
                        onClick={handleBuscarClick}               
                        aria-label="Search database"
                        icon={<SearchIcon />}
                        h="100%"
                        w="100%"
                        mr="0.5rem"
                        mt="0.5rem"
                        />
                    </InputRightElement>
                    </InputGroup>
                </FormControl>
                </Stack>
            </Flex>
            
            <Grid 
                templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} 
                gap={4} 
                mt={8}
                align="center"  
                justifyItems="center"
            >
            {imagenes.map(imagen => (
                <Card 
                    maxW='sm'
                    key={imagen.id}
                >
                <CardBody>
                  <Image
                    src={imagen.urls.regular}
                    alt='Imagen'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>{imagen.alt_description.toUpperCase()}</Heading>                    
                  </Stack>
                  <Text>
                    <strong>Ubicación:</strong> {imagen.user?.location || 'No disponible'}
                  </Text> 
                  <Text>
                    <strong>Cámara:</strong> {imagen.exif?.name || 'No disponible'}
                  </Text> 
                    <strong>Tags: </strong>
                  <Text
                    color='red'
                  >   
                        {imagen.tags?.map((tag) => tag.title).join(', ') || 'No disponible'}
                   </Text>                 
                </CardBody>
                <Divider />                
              </Card>
            ))}
            </Grid>
        </Box>
    )
}

export default Buscador 