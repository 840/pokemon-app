import { ReactElement } from "react"
import { Container } from "react-bootstrap"
import WhoIsThatPokemon from "../components/WhoIsThatPokemon"

function Quiz(): ReactElement {
    return (
        <div>
            <Container className="p-5">
                <WhoIsThatPokemon />
            </Container>
        </div>

    )
}

export default Quiz