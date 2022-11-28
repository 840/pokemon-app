import { ReactElement } from "react"
import { Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"

function PokemonSearchResult({ pokemon }: any): ReactElement {    
    if (Object.keys(pokemon).length === 0) return <div />
    
        return (
            <div>
                <Image src={pokemon?.sprites?.versions['generation-v']['black-white'].animated.front_default || pokemon?.sprites?.versions['generation-v']['black-white'].animated.front_default} />
                <Link to={`/pokemon/${pokemon.id}`}>
                    <Button>More details</Button>
                </Link>
                <pre>
                    <code>{JSON.stringify(pokemon, null, 2)}</code>
                </pre>
            </div>
        )
}

export default PokemonSearchResult