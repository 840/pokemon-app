export async function getPokemonByNameOrId(pokemonId: string | number): Promise<Record<string, any>> {
    if (typeof pokemonId === 'string')
        pokemonId = pokemonId.toLowerCase()
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    switch (response.status) {
        case 200:
            return await response.json()
        case 404:
            return await { 'error': `Could not find ${pokemonId}` }
        default:
            return await { 'error': 'Something went wrong!' }
    }
}

export async function getListOfPokemon(limit: number, offset = 0): Promise<Record<string, any>> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    return await response.json()
}