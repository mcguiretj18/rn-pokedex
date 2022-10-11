import React from "react";
import { FlatList, View } from "react-native";

import PokemonCard from "./PokemonCard";
import sharedStyles from "../shared/styles";
import useQueryCustom from "../hooks/useQuery";
import { fetchPokemonListByType } from "../api/fetchFns";
import { POKEMON_TYPE_KEY } from "../api/constants";



const PokemonListByType = ({ typeUrl, ...props }) => {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: POKEMON_TYPE_KEY,
        invalidateOptions: { typeUrl },
        fetchFn: fetchPokemonListByType,
        fetchArgs: typeUrl
    });

    if (isLoading || error) return null;

    const renderData = ({ item }) => {
        return <PokemonCard {...item.pokemon} {...props} />
    }

    const getItemExtractorKey = (_, index) => {
        return index.toString();
    }

    return (
        <View style={sharedStyles.alignItemsStart}>
            <FlatList
                numColumns={2}
                horizontal={false}
                data={data?.pokemon}
                keyExtractor={getItemExtractorKey}
                renderItem={renderData}
            />
        </View>
    );
}

export default PokemonListByType;
