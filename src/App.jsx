import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import  Buscador  from './components/Buscador/Buscador'
import { Container } from "react-bootstrap"


function App() {
  

  return (
    <>
      <header>
          
      </header>
    <Container className="mt-5">
      <ChakraProvider>
        <Buscador />
      </ChakraProvider>
    </Container>  
      
    </>
  )
}

export default App
