export async function getPokemonByNameOrId(pokemonId: string | number): Promise<Record<string, any>> {
    if (typeof pokemonId === 'string')
        pokemonId = pokemonId.toLowerCase()
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

    switch (response.status) {
        case 200:
            return new Promise((resolve) => resolve(response.json()))
        case 404:
            return new Promise((resolve) => resolve({ 'error': `Could not find ${pokemonId}` }))
        default:
            return new Promise((resolve) => resolve({ 'error': 'Something went wrong!' }))
    }
}

export async function getListOfPokemon(limit: number, offset = 0): Promise<Record<string, any>> {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    return await response.json()
}