import useImagenes from "../hooks/useImagenes"
import { Box, Grid, Card, CardBody, Image, Heading, Text, Divider, Flex, Avatar, AspectRatio } from '@chakra-ui/react';




const CardComponente = () => {

const { imagenes } = useImagenes()

console.log(imagenes)


return (
    <Box>
       <Grid templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} gap={4} mt={8}>
        {imagenes.map((imagen) =>(
          <Card key={imagen.id}>
          <CardBody>
            <Image
              src={imagen.urls.small}              
              borderRadius='lg'
            />
            <Heading size='md' m={5}>{imagen.alt_description.toUpperCase()}</Heading>
          </CardBody>
        </Card>
        ))}            
      </Grid>
    </Box>
  );
};


export { CardComponente }