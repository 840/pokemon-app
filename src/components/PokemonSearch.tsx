import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { useState, ReactElement, useEffect } from 'react'
import PokemonSearchResult from './PokemonSearchResult'
import { useParams } from 'react-router-dom'

function PokemonSearch(): ReactElement {
    const [state, setState] = useState({
        search: '',
        searching: false,
        typingTimeout: setTimeout(() => { }),
        pokemon: {},
        pokemonLocation: {}
    })

    const { name } = useParams()

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

    const searchPokemonApi = async (pokemonName: string): Promise<void> => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
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

    useEffect(() => {
        if (!name) return
        
        setState({
            ...state,
            search: name,
            searching: true,
            typingTimeout: setTimeout(() => searchPokemonApi(name), 1000)
        })
     }, [name])

    const spinner = <Spinner animation='border' />
    const pokemonEntry = <PokemonSearchResult pokemon={state.pokemon} />

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