import React from "react";
import { View } from "react-native";
import { useTailwind } from 'tailwind-rn';

import PokemonCard from "./PokemonCard";
import useQueryCustom from "../hooks/useQuery";
import { fetchSinglePokemon } from "../api/fetchFns";
import { BASE_URL, POKEMON_TYPE_KEY } from "../api/constants";

function Pokemon({ searchTerm, ...props }) {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: POKEMON_TYPE_KEY,
        fetchFn: fetchSinglePokemon,
        fetchArgs: searchTerm
    });
    const tailwind = useTailwind();

    if (isLoading || error) return null;

    return (
        <View style={tailwind('items-start')}>
            <PokemonCard
                name={data?.name}
                url={`${BASE_URL}/${searchTerm.toLowerCase()}/`}
                {...props}
            />
        </View>
    )
};

export default Pokemon;