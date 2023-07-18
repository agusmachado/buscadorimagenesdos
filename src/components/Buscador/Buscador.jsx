import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex, Box, Grid } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import useImagenes from '../hooks/useImagenes';
import { useState } from 'react';


const Buscador = () => {    

    const { imagenes, setImagenes } = useImagenes()

    console.log(imagenes)

    return(
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
                
              />
              <InputRightElement width="4.5rem">
                <IconButton
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
    )
};

export default Buscador;