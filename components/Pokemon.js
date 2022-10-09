import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Image, StyleSheet, Text, View } from 'react-native';

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
    name: {
        fontWeight: "bold",
        fontSize: 16,
        textTransform: "capitalize"
    },
    order: {
        marginTop: 6
    },
    textCenter: {
        textAlign: "center",
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

const Pokemon = ({ name, url }) => {
    const { isLoading, error, data } = useQuery(['pokemon', { url }], () => fetchPokemon(url));

    if (isLoading || error) {
        return null;
    }

    const officialArtworkImgSrc = data?.sprites?.other?.['official-artwork']?.front_default ?? "";
    const type = data?.types?.[0]?.type?.name ?? "";

    return (
        <View style={[styles.container, styles[type]]}>
            <Image source={{ uri: officialArtworkImgSrc }}  style={styles.image} />
            <Text style={[styles.name, styles.textCenter]}>
                {name}
            </Text>
            <Text style={[styles.order, styles.textCenter]}>
                {`${data?.id}`.padStart(3, "0")}
            </Text>
        </View>
    );
}

export default Pokemon;