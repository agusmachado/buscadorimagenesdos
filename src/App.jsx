import { ChakraProvider } from '@chakra-ui/react'
import  Buscador  from './components/buscador/Buscador'
import { Container } from "react-bootstrap"
import { ImagenesProvider } from './components/context/ImagenesProvider'
import { CardComponente } from './components/card/CardComponente'




function App() {

  

  return (
    <ImagenesProvider>    
      <header>
          
      </header>
    <Container className="mt-5">
      <ChakraProvider>
        <Buscador />        
        <CardComponente/>
      </ChakraProvider>
    </Container>  
      
    </ImagenesProvider>
  )
}

export default App
