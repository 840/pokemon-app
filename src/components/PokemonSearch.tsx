import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { useState, ReactElement } from 'react'
import PokemonSearchResult from './PokemonSearchResult'

function PokemonSearch(): ReactElement {
    const [state, setState] = useState({
        searching: false,
        typingTimeout: setTimeout(() => { }),
        pokemon: {},
        pokemonLocation: {}
    })

    const handleChange = async (data: any) => {
        const name = data.target.name
        const value = data.target.type === 'checkbox' ? data.target.checked : data.target.value

        if (state.typingTimeout) {
            clearTimeout(state.typingTimeout)
        }

        if (value.length === 0) {
            return
        }

        setState({
            ...state,
            [name]: value,
            searching: true,
            typingTimeout: setTimeout(() => searchPokemonApi(value), 1000)
        })
    }

    const searchPokemonApi = async (pokemonId: string | number): Promise<void> => {
        if (typeof pokemonId === 'string')
            pokemonId = pokemonId.toLowerCase()    

        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then((data): Object => {
            switch (data.status) {
                case 200:
                    return data.json()
                case 404:
                    return { 'status': 'Not found' }
            }
            return { 'status': 'Something went wrong!' }
        })
        .then((data) => {
            setState({
                ...state,
                searching: false,
                pokemon: data
            })
        })
    }

    const spinner = <Spinner animation='border' />
    const pokemonEntry = <PokemonSearchResult pokemon={state.pokemon} searchPokemonApi={searchPokemonApi} />

    return (
        <>
            <InputGroup className='mb-3'>
                <Form.Control
                    name='search'
                    type='text'
                    placeholder='Pokemon name'
                    aria-label="Pokemon's name"
                    onChange={handleChange}
                />
            </InputGroup>
            {state.searching ? spinner : pokemonEntry}
        </>
    )
}

export default PokemonSearch