import { ReactElement } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from './../../assets/pokeball.svg'

function PokemonNavbar(): ReactElement {
    return (
        <>
            <Navbar bg='light' variant='light'>
                <Container>
                    <Navbar.Brand>
                        <img
                            alt=''
                            src={Logo}
                            width='30'
                            height='30'
                            className='d-inline-block align-top'
                        />{' '}
                        Pokédex
                    </Navbar.Brand>
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/quiz'>Quiz</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default PokemonNavbar