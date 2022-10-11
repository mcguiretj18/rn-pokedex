import React from "react";
import { View } from "react-native";
import { useQuery } from "@tanstack/react-query";

import PokemonCard from "./PokemonCard";
import sharedStyles from "../shared/styles";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

function fetchSinglePokemon(searchTerm = "") {
    return fetch(`${BASE_URL}/${searchTerm.toLowerCase()}/`).then(res => res.json());
}

function Pokemon({ searchTerm, ...props }) {
    const { isLoading, error, data } = useQuery(["pokemon"], () => fetchSinglePokemon(searchTerm));

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