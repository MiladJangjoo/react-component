import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default function Sidebar() {
  return (
    <Navbar className='flex-column sidebar'>
        <Nav.Item>
            <Nav.Link>my page </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>Milad Jangjoo</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>Sign in</Nav.Link>
        </Nav.Item>
    </Navbar>
  )
}
