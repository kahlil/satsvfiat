import { Container, VStack } from '@chakra-ui/react'

import { Footer } from './layout/Footer'
import { Sats } from './content/Sats'
import { What } from './content/What'
import { Where } from './content/Where'
import { UseCases } from './content/UseCases'

function Home() {
  return (
    <Container>
      <VStack my={24} spacing={12}>
        <Sats />
        <What />
        <Where />
        <UseCases />
        <Footer />
      </VStack>
    </Container>
  )
}

export default Home
