import { ReactElement } from "react"
import PokemonPage from "../components/PokemonPage"

function Pokemon(): ReactElement {
    return (
        <div>
            <h1>Pokédex</h1>
            <PokemonPage />
        </div>

    )
}

export default Pokemon