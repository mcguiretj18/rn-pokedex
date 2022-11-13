import React from "react";
import { FlatList, View } from "react-native";
import { useTailwind } from 'tailwind-rn';

import PokemonCard from "./PokemonCard";
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
    const tailwind = useTailwind();

    if (isLoading || error) return null;

    const renderData = ({ item }) => {
        return <PokemonCard {...item.pokemon} {...props} />
    }

    const getItemExtractorKey = (_, index) => {
        return index.toString();
    }

    return (
        <View style={tailwind('items-start')}>
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
