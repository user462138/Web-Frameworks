import React, { useState, useEffect } from "react";
import { IDataContext, Pokemon } from "../types";


export const DataContext = React.createContext<IDataContext>({ pokemons: [], loading: false, loadData: () => { } });

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const loadData = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500&offset=0");
            const json = await response.json();
            const pokemonsUrl = json.results;

            // Use Promise.all to wait for all fetch calls to resolve
            const pokemonsData = await Promise.all(
                pokemonsUrl.map(async (poke: { url: string }) => {
                    const response = await fetch(poke.url);
                    const pokemonData: Pokemon = await response.json();
                    return {
                        id: pokemonData.id,
                        name: pokemonData.name,
                        weight: pokemonData.weight,
                        height: pokemonData.height,
                        img: pokemonData.sprites.front_default,
                    }
                })
            );
            setPokemons(pokemonsData)
        } catch (error) {
            console.error('Error fetching Pokémon data:', error);
        }
        setLoading(false);
    }

    useEffect(() => {
        loadData();
        console.log(pokemons)
    }, []);

    return (
        <DataContext.Provider value={{ pokemons, loadData, loading }}>
            {children}
        </DataContext.Provider>
    )
}