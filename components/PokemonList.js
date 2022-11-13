import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { FlatList, Text, View } from "react-native";
import PokemonCard from "./PokemonCard";
import { useTailwind } from 'tailwind-rn';
import { fetchPokemonList } from "../api/fetchFns";

const PokemonList = (props) => {
    const { isLoading, error, data, hasNextPage, fetchNextPage } = useInfiniteQuery(["pokemonList"], fetchPokemonList, {
        getNextPageParam: lastPage => {
            if (lastPage.next !== null) {
                return lastPage.next.split("?")[1];
            }

            return lastPage;
        }
    });
    const tailwind = useTailwind();

    if (error) {
        return (
            <View>
                <Text>An error has occured.</Text>
            </View>
        )
    }

    if (isLoading) return null;

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
        <View style={tailwind('items-start')}>
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

export default PokemonList;