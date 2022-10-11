import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import sharedStyles from "../shared/styles";

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 12,
        margin: 20
    },
    image: {
        height: 120,
        width: 120
    },
    order: {
        marginTop: 6
    },
    bug: {
        backgroundColor: "#D6EEBA"
    },
    electric: {
        backgroundColor: "#EEECBA"
    },
    fairy: {
        backgroundColor: "#EEBAD6"
    },
    fighting: {
        backgroundColor: "#E9C5A6"
    },
    fire: {
        backgroundColor: "#EED2BA"
    },
    grass: {
        backgroundColor: "#C4E2D5"
    },
    ground: {
        backgroundColor: "#E9C5A6"
    },
    normal: {
        backgroundColor: "#E8EBEC"
    },
    poison: {
        backgroundColor: "#D2BAEE"
    },
    psychic: {
        backgroundColor: "#D2BAEE"
    },
    rock: {
        backgroundColor: "#E9C5A6"
    },
    water: {
        backgroundColor: "#BAD6EE"
    }
});

const fetchPokemon = (url) => {
    return fetch(url)
        .then(response => response.json())
}

const PokemonCard = ({ name, url, ...props }) => {
    const { isLoading, error, data } = useQuery(["pokemon", { url }], () => fetchPokemon(url));

    if (isLoading || error) {
        return null;
    }

    const officialArtworkImgSrc = data?.sprites?.other?.["official-artwork"]?.front_default ?? "";
    const type = data?.types?.[0]?.type?.name ?? "";

    if (!officialArtworkImgSrc) return null;

    return (
        <View style={[styles.container, styles[type]]}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Details", {
                pokemonId: data?.id
            })}>
                <Image source={{ uri: officialArtworkImgSrc }} style={styles.image} />
                <Text style={[
                    sharedStyles.name,
                    sharedStyles.fontBold,
                    sharedStyles.capitalize,
                    sharedStyles.textCenter
                ]}>
                    {name?.split("-")?.[0]}
                </Text>
                <Text style={[styles.order, sharedStyles.textCenter]}>
                    {`${data?.id}`.padStart(3, "0")}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default PokemonCard;