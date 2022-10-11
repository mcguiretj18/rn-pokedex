import React from "react";
import { useQuery } from '@tanstack/react-query';
import { FlatList, StyleSheet, View } from 'react-native';
import PokemonCard from "./PokemonCard";

const BASE_URL = 'https://pokeapi.co/api/v2/type';

const fetchPokemonListByType = (type) => {
    return fetch(`${BASE_URL}/${type}`)
        .then(response => response.json())
}

const PokemonListByType = ({ type, ...props }) => {
    const { isLoading, error, data } = useQuery(['pokemonListByType', { type }], () => fetchPokemonListByType(type))

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
