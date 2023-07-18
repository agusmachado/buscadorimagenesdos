import useImagenes from "../hooks/useImagenes"
import { Box, Grid, Card, CardBody, Image, Heading, Text, Divider, Flex, Avatar, AspectRatio } from '@chakra-ui/react';




const CardComponente = () => {



return (
    <Box>
       <Grid templateColumns={['1fr', '1fr ', '1fr 1fr', '1fr 1fr 1fr']} gap={4} mt={8}>
        <Card>
          <CardBody>
            <Image
              src=''              
              borderRadius='lg'
            />
          </CardBody>
        </Card>      
      </Grid>
    </Box>
  );
};


export { CardComponente }