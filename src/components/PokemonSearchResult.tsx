import { ReactElement } from 'react'
import { Button, Card, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'animate.css';


function PokemonSearchResult({ pokemon }: any): ReactElement {    
    if (Object.keys(pokemon).length === 0) return <div />

    const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)

    return (
        <Row>
            <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12'>
                <Card>
                    <Card.Header>{ pokemonName } - #{ pokemon.id }</Card.Header>
                    <Card.Img style={{ 'height': '30%', 'width': '100px' }} className='py-4 mx-auto d-block animate__animated animate__bounce' src={pokemon?.sprites?.versions['generation-v']['black-white'].animated.front_default || pokemon?.sprites?.front_default} />
                    <Card.Body className='border-top'>
                        <Card.Title></Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                    <Row className='pb-3'>
                        <Link className='col-md-4' to={`/search/${pokemon.id - 1}`}>
                            <Button>&laquo;</Button>
                        </Link>  
                        <Link className='col-md-4' to={`/pokemon/${pokemon.name}`}>
                            <Button>More details</Button>
                        </Link>  
                        <Link className='col-md-4' to={`/search/${pokemon.id + 1}`}>
                            <Button>&raquo;</Button>
                        </Link>  
                    </Row>
                </Card>
            </div>
        </Row>
    )
}

export default PokemonSearchResult