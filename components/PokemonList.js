import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import PokemonCard from './PokemonCard';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const fetchPokemonList = ({ pageParam = 'limit=9&offset=0' }) => {
    return fetch(`${BASE_URL}?${pageParam}`)
        .then(response => response.json())
}

const PokemonList = (props) => {
    const { error, data, hasNextPage, fetchNextPage } = useInfiniteQuery(['pokemonList'], fetchPokemonList, {
        getNextPageParam: lastPage => {
            if (lastPage.next !== null) {
                return lastPage.next.split('?')[1];
            }

            return lastPage;
        }
    });

    if (error) {
        return (
            <View>
                <Text>An error has occured.</Text>
            </View>
        )
    }

    const loadMorePokemon = () => {
        if (hasNextPage) {
          fetchNextPage();
        }
    };

    const renderData = ({ item }) => {
        return <PokemonCard {...item} {...props} />
    }

    const getItemExtractorKey = (_, index) => {
        return index.toString();
    }

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                horizontal={false}
                data={data?.pages.map(page => page.results).flat()}
                keyExtractor={getItemExtractorKey}
                renderItem={renderData}
                onEndReached={loadMorePokemon}
                onEndReachedThreshold={0.3}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-start",
    }
})

export default PokemonList;