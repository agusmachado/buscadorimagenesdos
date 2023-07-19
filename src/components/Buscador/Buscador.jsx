import { Input, InputRightElement, InputGroup, Stack, IconButton, FormControl, Flex } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import useImagenes from '../hooks/useImagenes';

const Buscador = () => {

// Aquí pongo disponible la función para buscar imágenes que se activará a través del onClick que, a su vez, tomará la información volcada en el Input para realizar la búsqueda.

  const { buscarImagenes } = useImagenes();
  const [busqueda, setBusqueda] = useState('');

  // Al activar la función activarBusqueda, reviso el Input y ejecuto la función buscarImagenes que traigo desde el provider con el contenido volcado en el Input.

  const activarBusqueda = async () => {

    await buscarImagenes(busqueda);    
    setBusqueda('') // Vacío el Input después de la búsqueda

  };

  return (
    <Flex align="center" justify="center">
      <Stack spacing={2} w={['100%', '100%', '50%']}>
        <FormControl>
            {/* Con el htmlFor hago accesible el formulario con el teclado a través de los id en el Input y en el IconButton */}
          <InputGroup htmlFor='nombre'>
            
            <Input
                id='nombre'
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
                id='nombre'
                aria-label="Search database"
                icon={<SearchIcon />}
                h="100%"
                w="100%"
                mr="0.5rem"
                mt="0.5rem"

                // Con el evento onClick, activo la funció para buscar

                onClick={activarBusqueda}
              />
            </InputRightElement>
          </InputGroup>
        </FormControl>
      </Stack>
    </Flex>
  );
};

export default Buscador;

