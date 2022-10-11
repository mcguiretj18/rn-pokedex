import React from "react";
import { useQuery } from '@tanstack/react-query';
import { FlatList, StyleSheet, View } from 'react-native';
import PokemonCard from "./PokemonCard";

const fetchPokemonListByType = (typeUrl) => {
    return fetch(typeUrl)
        .then(response => response.json())
}

const PokemonListByType = ({ typeUrl, ...props }) => {
    console.log({ typeUrl });
    const { isLoading, error, data } = useQuery(['pokemonListByType', { typeUrl }], () => fetchPokemonListByType(typeUrl))

    if (isLoading || error) return null;

    const renderData = ({ item }) => {
        return <PokemonCard {...item.pokemon} {...props} />
    }

    const getItemExtractorKey = (_, index) => {
        return index.toString();
    }

    return (
        <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
    }
})

export default PokemonListByType;
