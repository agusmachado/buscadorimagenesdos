import { ChakraProvider } from '@chakra-ui/react';
import { Container } from "react-bootstrap";
import { ImagenesProvider } from './components/context/ImagenesProvider';
import { CardComponente } from './components/card/CardComponente';
import Buscador from './components/Buscador/Buscador';

function App() {
  return (
    // Envuelvo mi código en el provider para poder pasar los datos por todos los componentes
    <ImagenesProvider>
      <Container className="mt-5">
        <ChakraProvider>
          
          <Buscador /> 
          
          <CardComponente />
            
        </ChakraProvider>
      </Container>  
    </ImagenesProvider>
  );
}

export default App;

