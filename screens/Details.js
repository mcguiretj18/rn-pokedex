import { Image, StyleSheet, Text, View } from "react-native";
import { useQuery } from '@tanstack/react-query';
import Container from '../containers';

const POKEMON_DETAIL_BASE_URL = `https://pokeapi.co/api/v2/pokemon`;

const fetchPokemon = (id) => {
    return fetch(`${POKEMON_DETAIL_BASE_URL}/${id}`)
        .then(response => response.json())
}


const Details = ({ route }) => {
    const { pokemonId = "" } = route.params;
    const { isLoading, error, data } = useQuery(['pokemon', { pokemonId }], () => fetchPokemon(pokemonId));

    if (isLoading || error) {
        return null;
    }

    const officialArtworkImgSrc = data?.sprites?.other?.['official-artwork']?.front_default ?? "";
    const type = data?.types?.[0]?.type?.name ?? "";
    return (
        <Container>
            <Text style={[styles.name, styles.textCenter]}>
                {data?.name}
            </Text>
            <Text style={[styles.order, styles.textCenter]}>
                {`${data?.id}`.padStart(3, "0")}
            </Text>
            <View style={[styles.container, styles[type]]}>
                    <Image source={{ uri: officialArtworkImgSrc }} style={styles.image} />
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 60,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    image: {
        height: 240,
        width: 240
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

export default Details;