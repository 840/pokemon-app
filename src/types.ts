export type Pokemon = {
    abilities: Ability[]
    base_experience: number
    forms: Species[]
    game_indices: GameIndex[]
    height: number
    held_items?: HeldItem[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Move[]
    name: string
    order: number
    past_types?: PastType[]
    species: Species
    sprites: Sprites
    stats: Stat[]
    types: Type[]
    weight: number
}

export type Ability = {
    ability: Species
    is_hidden: boolean
    slot: number
}

export type Species = {
    name: string
    url: string
}

export type GameIndex = {
    game_index: number
    version: Species
}

export type HeldItem = {
    item: Species
    version_details: VersionDetail[]
}

export type VersionDetail = {
    rarity: number
    version: Species
}

export type Move = {
    move: Species
    version_group_details: VersionGroupDetail[]
}

export type VersionGroupDetail = {
    level_learned_at: number
    move_learn_method: Species
    version_group: Species
}

export type PastType = {
    generation: Species
    types: Type[]
}

export type Type = {
    slot: number
    type: Species
}

export type GenerationV = {
    'black-white'?: Sprites
}

export type GenerationIV = {
    'diamond-pearl'?: Sprites
    'heartgold-soulsilver'?: Sprites
    platinum?: Sprites
}

export type GenerationVI = {
    'omegaruby-alphasapphire'?: Sprites
    'x-y'?: Sprites
}

export type Versions = {
    'generation-i'?: GenerationI
    'generation-ii'?: GenerationII
    'generation-iii'?: GenerationIII
    'generation-iv'?: GenerationIV
    'generation-v'?: GenerationV
    'generation-vi'?: GenerationVI
    'generation-vii'?: GenerationVII
    'generation-viii'?: GenerationVIII
}

export type Sprites = {
    back_default: string | null
    back_female: string | null
    back_shiny: string | null
    back_shiny_female: string | null
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
    other: Other
    versions: Versions
    animated: Sprites
}

export type GenerationI = {
    'red-blue': RedBlue
    yellow: RedBlue
}

export type RedBlue = {
    back_default?: string | null
    back_gray?: string | null
    back_transparent?: string | null
    front_default?: string | null
    front_gray?: string | null
    front_transparent?: string | null
}

export type GenerationII = {
    crystal?: Crystal
    gold?: Gold
    silver?: Gold
}

export type Crystal = {
    back_default: string | null
    back_shiny: string | null
    back_shiny_transparent: string | null
    back_transparent: string | null
    front_default: string | null
    front_shiny: string | null
    front_shiny_transparent: string | null
    front_transparent: string | null
}

export type Gold = {
    back_default: string | null
    back_shiny: string | null
    front_default: string | null
    front_shiny: string | null
    front_transparent: string | null
}

export type GenerationIII = {
    emerald?: Emerald
    'firered-leafgreen'?: Gold
    'ruby-sapphire'?: Gold
}

export type Emerald = {
    front_default: string | null
    front_shiny: string | null
}

export type Home = {
    front_default: string | null
    front_female: string | null
    front_shiny: string | null
    front_shiny_female: string | null
}

export type GenerationVII = {
    icons?: DreamWorld
    'ultra-sun-ultra-moon'?: Home
}

export type DreamWorld = {
    front_default?: string
    front_female?: null
}

export type GenerationVIII = {
    icons?: DreamWorld
}

export type Other = {
    dream_world?: DreamWorld
    home: Home
    'official-artwork': OfficialArtwork
}

export type OfficialArtwork = {
    front_default: string
}

export type Stat = {
    base_stat?: number
    effort?: number
    stat?: Species
}

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

export function isPokemon(obj: unknown): obj is Pokemon {
    return obj !== undefined
}

export function isErrorMessage(obj: unknown): obj is ErrorMessage {
    return obj !== undefined
}