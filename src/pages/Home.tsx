import { ReactElement } from "react"
import { Container } from "react-bootstrap"
import PokemonSearch from "../components/PokemonSearch"

function Home(): ReactElement {
    return (
        <div>
            <Container className="p-5">
                <PokemonSearch />
            </Container>
        </div>

    )
}

export default Home