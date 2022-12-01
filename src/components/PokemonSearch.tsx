import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { useState, ReactElement } from 'react'
import PokemonSearchResult from './PokemonSearchResult'
import { getPokemonByNameOrId } from '../lib/PokemonApi'

function PokemonSearch(): ReactElement {
    const [state, setState] = useState({
        searching: false,
        typingTimeout: setTimeout(() => { return }),
        pokemon: {},
        pokemonLocation: {}
    })


    // Will type this response in the future
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSearch = async (data: any) => {
        const value = data.target.type === 'checkbox' ? data.target.checked : data.target.value

        if (state.typingTimeout) {
            clearTimeout(state.typingTimeout)
        }

        if (value.length === 0) {
            return
        }

        handleChange(value)
    }

    // Will type this response in the future
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = async (pokemonId: string | number) => {
        setState({
            ...state,
            searching: true,
            typingTimeout: setTimeout(() => getPokemonByNameOrId(pokemonId)
                .then((data) => {
                    setState({
                        ...state,
                        searching: false,
                        pokemon: data
                    })
                }), 500)
        })
    }


    const spinner = <Spinner animation='border' />
    const pokemonResult = <PokemonSearchResult pokemon={state.pokemon} cardHandleChange={handleChange} />

    return (
        <>
            <InputGroup className='mb-3'>
                <Form.Control
                    name='search'
                    type='text'
                    placeholder='Pokemon name'
                    aria-label="Pokemon's name"
                    onChange={handleSearch}
                />
            </InputGroup>
            {state.searching ? spinner : pokemonResult}
        </>
    )
}

export default PokemonSearch