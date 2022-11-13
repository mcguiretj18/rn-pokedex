import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { useTailwind } from 'tailwind-rn';

import sharedStyles from '../shared/styles';
import useQueryCustom from "../hooks/useQuery";
import { fetchPokemon } from "../api/fetchFns";
import { POKEMON_TYPE_KEY } from "../api/constants";

const PokemonCard = ({ name, url, ...props }) => {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: POKEMON_TYPE_KEY,
        invalidateOptions: { url },
        fetchFn: fetchPokemon,
        fetchArgs: url
    });
    const tailwind = useTailwind();

    if (isLoading || error) {
        return null;
    }

    const officialArtworkImgSrc = data?.sprites?.other?.["official-artwork"]?.front_default ?? "";
    const type = data?.types?.[0]?.type?.name ?? "";

    if (!officialArtworkImgSrc) return null;

    return (
        <View style={[styles.container, sharedStyles[type]]}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Details", {
                pokemonId: data?.id
            })}>
                <Image source={{ uri: officialArtworkImgSrc }} style={styles.image} />
                <Text style={tailwind('text-base font-bold capitalize text-center')}>
                    {name?.split("-")?.[0]}
                </Text>
                <Text style={tailwind('mt-1.5 text-center')}>
                    {`${data?.id}`.padStart(3, "0")}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        borderRadius: 20,
        padding: 12,
        margin: 20
    },
    image: {
        height: 120,
        width: 120
    },
});

export default PokemonCard;