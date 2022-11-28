function PokemonEntry({ pokemon }: any) {    
        return (
            <div>
                <img src={pokemon?.sprites?.versions['generation-v']['black-white'].animated.front_default || pokemon?.sprites?.versions['generation-v']['black-white'].animated.front_default}></img>
                <pre>
                    <code>{JSON.stringify(pokemon, null, 2)}</code>
                </pre>
            </div>
        )
}

export default PokemonEntry