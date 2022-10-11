import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import sharedStyles from "../shared/styles";
import useQueryCustom from "../hooks/useQuery";
import { fetchPokemon } from "../api/fetchFns";

const PokemonCard = ({ name, url, ...props }) => {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: "pokemon",
        invalidateOptions: { url },
        fetchFn: fetchPokemon,
        fetchArgs: url
    });

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
};

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
});

export default PokemonCard;