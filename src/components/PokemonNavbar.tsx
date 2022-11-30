import { ReactElement } from 'react'
import { Container, Navbar } from 'react-bootstrap'
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
                </Container>
            </Navbar>
        </>
    )
}

export default PokemonNavbar