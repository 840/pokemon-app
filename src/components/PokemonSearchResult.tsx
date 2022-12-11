import { ReactElement } from 'react'
import { Badge, Button, Card, Row } from 'react-bootstrap'
import 'animate.css'
import { Link } from 'react-router-dom'
import { PokemonSearch } from './../types'
import { isErrorMessage, isPokemon } from '../utils'
import { Type } from '../lib/PokemonApi'

function PokemonSearchResult({ pokemon, cardHandleChange }: PokemonSearch): ReactElement {
    if (isErrorMessage(pokemon) && pokemon.error) return <div>{pokemon.error}</div>
    if (isPokemon(pokemon) && (Object.keys(pokemon).length === 0 || pokemon.name === undefined)) return <div />

    if (isPokemon(pokemon)) {
        const pokemonName = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
        const pokemonTypes = pokemon.types.map((pokemonType: Type) => {
            const pokemonTypeName = pokemonType.type.name.charAt(0).toUpperCase() + pokemonType.type.name.slice(1)
            return <Badge className='me-1' key={pokemonTypeName}> {pokemonTypeName} </Badge>
        })
        
        const nextPokemon = () => {
            cardHandleChange(pokemon.id + 1)
        }
        const prevPokemon = () => {
            cardHandleChange(pokemon.id - 1)
        }

        return (
            <Row>
                <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12'>
                    <Card>
                        <Card.Header>{pokemonName} - #{pokemon.id}</Card.Header>
                        <Card.Img style={{ 'height': '30%', 'width': '100px' }} className='py-4 mx-auto d-block animate__animated animate__bounce' src={pokemon.sprites.other['official-artwork'].front_default} />
                        <Card.Body className='border-top'>
                            {pokemonTypes}
                        </Card.Body>
                        <Row className='pb-3'>
                            <Button className='col-md-1 offset-md-2' onClick={prevPokemon}>&laquo;</Button>
                            <Link className='col-md-4 offset-md-1' to={`/pokemon/${pokemon.name}`}>
                                <Button>More details</Button>
                            </Link>
                            <Button className='col-md-1 offset-md-1' onClick={nextPokemon}>&raquo;</Button>
                        </Row>
                    </Card>
                </div>
            </Row>
        )
    }

    return <div />
}

export default PokemonSearchResult