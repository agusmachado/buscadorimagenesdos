import { useState } from "react";
import useImagenes from "../hooks/useImagenes"
import { Box, Grid, Card, CardBody, Image, Heading, Text, Stack, HStack, Tag, TagLabel, Divider, Flex, Avatar, AspectRatio } from '@chakra-ui/react';




const CardComponente = () => {

  const { imagenes, buscarImagenes } = useImagenes();
  console.log(imagenes)
  

  const handleSearch = async (searchTerm) => {
    await buscarImagenes(searchTerm); 
  };

return (
    <Box>
       <Grid templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} gap={4} mt={8}>
        {imagenes.map((imagen) =>(
          <Card
            key={imagen.id}
          >
          <CardBody>
            <Image
              src={imagen.urls.regular}              
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{imagen.alt_description.toUpperCase()}</Heading>
              <Text>
                
              </Text>                
               
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
                    cursor="pointer"
                  >
                    <TagLabel>{tag.title}</TagLabel>
                  </Tag>

                ))}
              </HStack>

              
            </Stack>
          </CardBody>
        </Card>
        ))}
              
      </Grid>
    </Box>
  );
};


export { CardComponente }