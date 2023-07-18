import { ChakraProvider } from '@chakra-ui/react'
import { Container } from "react-bootstrap"
import { ImagenesProvider } from './components/context/ImagenesProvider'
import { CardComponente } from './components/card/CardComponente'
import Buscador from './components/Buscador/Buscador'



function App() {

  

  return (
    <ImagenesProvider>    
      
      <Container className="mt-5">
        <ChakraProvider>
          <Buscador/>     
          <CardComponente/>
        </ChakraProvider>
      </Container>  
      
    </ImagenesProvider>
  )
}

export default App
