import { ErrorMessage } from "./types"
import { Pokemon } from "./lib/PokemonApi"

export function isPokemon(obj: unknown): obj is Pokemon {
    return obj !== undefined
}

export function isErrorMessage(obj: unknown): obj is ErrorMessage {
    return obj !== undefined
}