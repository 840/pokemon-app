import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'
import Form from 'react-bootstrap/Form'
import { useState, ReactElement } from 'react'
import PokemonSearchResult from './PokemonSearchResult'

function PokemonSearch(): ReactElement {
    const [state, setState] = useState({
        search: '',
        searching: false,
        typingTimeout: setTimeout(() => { }),
        pokemon: {}
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
            typingTimeout: setTimeout(() => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
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
                        console.log(data)
                    })
            }, 1000)
        })
    }

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