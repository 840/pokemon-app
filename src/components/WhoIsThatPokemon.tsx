import { useState, ReactElement, useEffect } from 'react'
import { Row, Card, Button, ButtonGroup, Spinner } from 'react-bootstrap'
import { getListOfPokemon, getPokemonByNameOrId } from '../lib/PokemonApi'

const MAX_POKEMON_ID = 899
const QUIZ_AMOUNT = 10

function WhoIsThatPokemon(): ReactElement {
    const [state, setState] = useState({
        quizTotal: QUIZ_AMOUNT,
        quizCurrent: 1,
        quizCorrect: 0,
        correctPokemonName: '',
        correctPokemonImage: '',
        incorrectPokemon: <></>
    })

    useEffect(() => {
        fetchList()
    }, [state.quizCurrent])
    
    const fetchList = async () => {
        const response = await getListOfPokemon(MAX_POKEMON_ID)
        const incorrectPokemon = response.results.sort(() => .5 - Math.random()).slice(0, 4)
        const correctPokemon = await getPokemonByNameOrId(incorrectPokemon[Math.floor(Math.random() * 4)]['name'])

        const answers = <>
            <ButtonGroup>
                <Button key={ incorrectPokemon[0].name } onClick={() => submitAnswer(incorrectPokemon[0].name)} variant='danger' size="lg" style={buttonStyle}>{incorrectPokemon[0].name.charAt(0).toUpperCase() + incorrectPokemon[0].name.slice(1)}</Button>
                <Button key={ incorrectPokemon[1].name } onClick={() => submitAnswer(incorrectPokemon[1].name)} variant='primary' size="lg" style={buttonStyle}>{incorrectPokemon[1].name.charAt(0).toUpperCase() + incorrectPokemon[1].name.slice(1)}</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button key={ incorrectPokemon[2].name } onClick={() => submitAnswer(incorrectPokemon[2].name)} variant='warning' size="lg" style={buttonStyle}>{incorrectPokemon[2].name.charAt(0).toUpperCase() + incorrectPokemon[2].name.slice(1)}</Button>
                <Button key={ incorrectPokemon[3].name } onClick={() => submitAnswer(incorrectPokemon[3].name)} variant='success' size="lg" style={buttonStyle}>{incorrectPokemon[3].name.charAt(0).toUpperCase() + incorrectPokemon[3].name.slice(1)}</Button>
            </ButtonGroup>
        </>
        
        setState({
            ...state,
            incorrectPokemon: answers,
            correctPokemonName: correctPokemon.name,
            correctPokemonImage: correctPokemon.sprites.other['official-artwork'].front_default
        })
    }

    const submitAnswer = (pokemonName: string) => {
        setState({
            ...state,
            quizCorrect: pokemonName === state.correctPokemonName ? state.quizCorrect + 1 : state.quizCorrect,
            quizCurrent: state.quizCurrent + 1
        })
    }

    const buttonStyle = {
        'color': 'white',
        'borderRadius': 0,
        'width': '300px'
    }
    
    const quizCard = <Row>
        <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12'>
            <Card>
                <Card.Header>{state.quizCurrent} / {state.quizTotal}</Card.Header>
                <Card.Img style={{ 'height': '30%', 'width': '100px', 'filter': 'brightness(0)' }} className='py-4 mx-auto d-block animate__animated animate__bounce' src={state.correctPokemonImage} />
                <Card.Body className='border-top'>
                    <Card.Title></Card.Title>
                    <Card.Text></Card.Text>
                </Card.Body>
                {state.incorrectPokemon}
            </Card>
        </div>
    </Row>

    const spinner = <Row>
        <div className='col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12'>
            <Card>
                <Card.Header></Card.Header>
                <Card.Body>
                    <Spinner animation='border'/>
                </Card.Body>
            </Card>
        </div>
    </Row>

    return (
        <>
            {state.correctPokemonName ? quizCard : spinner}
        </>
    )
}

export default WhoIsThatPokemon