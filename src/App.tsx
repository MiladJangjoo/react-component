import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import Heading from './assets/components/Heading'
import './styles.css'
import SectionOne from './assets/components/SectionOne'
import Sidebar from './assets/components/Sidebar'


function App(): JSX.Element {
  
  

  return (
    <Container>
    <Heading />
    <Stack direction='horizontal'>
    
    <Sidebar />
    <div>
    
    <SectionOne />
    </div>
    </Stack>
    </Container>
    
  )
}

export default App
