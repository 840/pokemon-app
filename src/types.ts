import { ReactElement } from "react"
import { Pokemon } from "./lib/PokemonApi"

export type ErrorMessage = {
    error: string
}

export type PokemonList = {
    count:    number;
    next:     string;
    previous: string;
    results:  Result[];
}

export type Result = {
    name: string;
    url:  string;
}

export type PokemonSearch = {
    pokemon?: Pokemon | ErrorMessage,
    cardHandleChange: (pokemonId: string | number) => Promise<void>
}

export type WhoIsThatPokemonState = {
    quizTotal: number,
    quizCurrent: number,
    quizCorrect: number,
    correctPokemonName: string,
    correctPokemonImage: string,
    incorrectPokemon: ReactElement
}