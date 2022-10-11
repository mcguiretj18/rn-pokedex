import { Image, StyleSheet, Text, View } from "react-native";

import Container from "../containers";
import sharedStyles from "../shared/styles";
import useQueryCustom from "../hooks/useQuery";
import { fetchPokemonDetails } from "../api/fetchFns";


const Details = ({ route }) => {
    const { pokemonId = "" } = route.params;
    const { isLoading, error, data } = useQueryCustom({
        queryKey: "pokemon",
        invalidateOptions: { pokemonId },
        fetchFn: fetchPokemonDetails,
        fetchArgs: pokemonId
    });

    if (isLoading || error) {
        return null;
    }

    const officialArtworkImgSrc = data?.sprites?.other?.["official-artwork"]?.front_default ?? "";
    const type = data?.types?.[0]?.type?.name ?? "";

    return (
        <Container>
            <Text style={[
                sharedStyles.title,
                sharedStyles.fontBold,
                sharedStyles.capitalize,
                sharedStyles.textCenter
            ]}>
                {data?.name}
            </Text>
            <Text style={[sharedStyles.details, sharedStyles.textCenter]}>
                {`${data?.id}`.padStart(3, "0")}
            </Text>
            <View style={[styles.container, sharedStyles[type]]}>
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
});

export default Details;