import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import useImagenes from '../hooks/useImagenes';

const Buscador = () => {
  const { buscarImagenes } = useImagenes();
  const [busqueda, setBusqueda] = useState('');

  const handleSearch = async () => {
    await buscarImagenes(busqueda);    
    setBusqueda('') // Vacío el Input después de la búsqueda
  };

  return (
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
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <IconButton
                aria-label="Search database"
                icon={<SearchIcon />}
                h="100%"
                w="100%"
                mr="0.5rem"
                mt="0.5rem"
                onClick={handleSearch}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Buscador;

