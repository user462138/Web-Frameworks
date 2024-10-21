export interface Pokemon {
    sprites: any;
    id: number;
    name: string;
    weight: number;
    height: number;
    img: string
}

export interface IDataContext {
    pokemons: Pokemon[];
    loading: boolean;
    loadData: () => void;
}

