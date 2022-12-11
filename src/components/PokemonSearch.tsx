import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { useState, ReactElement } from 'react'
import PokemonSearchResult from './PokemonSearchResult'
import { getPokemonByNameOrId } from '../lib/PokemonApi'
import { PokemonSearchState } from './../types'

const SEARCH_DELAY_IN_MS = 500

function PokemonSearch(): ReactElement {
    const [state, setState] = useState({
        searching: false,
        typingTimeout: setTimeout(() => { return }),
        pokemon: {},
    } as PokemonSearchState)

    const handleSearch = async (data: React.ChangeEvent<HTMLInputElement>) => {
        const value = data.target.type === 'checkbox' ? data.target.checked : data.target.value

        if (state.typingTimeout) clearTimeout(state.typingTimeout)
        if (typeof value === 'string' && value.length > 0) {
            handleChange(value)
        }

        return
    }

    const handleChange = async (pokemonId: string | number) => {
        setState({
            ...state,
            searching: true,
            typingTimeout: setTimeout(async () => {
                const pokemon = await getPokemonByNameOrId(pokemonId)
                setState({
                    ...state,
                    searching: false,
                    pokemon
                })
            }, SEARCH_DELAY_IN_MS)
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