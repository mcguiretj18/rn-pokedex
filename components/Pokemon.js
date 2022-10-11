import React from "react";
import { View } from "react-native";

import PokemonCard from "./PokemonCard";
import sharedStyles from "../shared/styles";
import useQueryCustom from "../hooks/useQuery";
import { fetchSinglePokemon } from "../api/fetchFns";
import { BASE_URL, POKEMON_TYPE_KEY } from "../api/constants";

function Pokemon({ searchTerm, ...props }) {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: POKEMON_TYPE_KEY,
        fetchFn: fetchSinglePokemon,
        fetchArgs: searchTerm
    });

    if (isLoading || error) return null;

    return (
        <View style={sharedStyles.alignItemsStart}>
            <PokemonCard
                name={data?.name}
                url={`${BASE_URL}/${searchTerm.toLowerCase()}/`}
                {...props}
            />
        </View>
    )
};

export default Pokemon;