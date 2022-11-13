import { Image, StyleSheet, Text, View } from "react-native";
import { useTailwind } from 'tailwind-rn';

import Container from "../containers";
import sharedStyles from "../shared/styles";
import useQueryCustom from "../hooks/useQuery";
import { fetchPokemonDetails } from "../api/fetchFns";
import { POKEMON_TYPE_KEY } from "../api/constants";
import Tabs from "../components/Tabs";
import { POKEMON_DETAIL_TABS } from "../shared/constants";


const Details = ({ route }) => {
    const { pokemonId = "" } = route.params;
    const { isLoading, error, data } = useQueryCustom({
        queryKey: POKEMON_TYPE_KEY,
        invalidateOptions: { pokemonId },
        fetchFn: fetchPokemonDetails,
        fetchArgs: pokemonId
    });
    const tailwind = useTailwind();

    if (isLoading || error) {
        return null;
    }

    const officialArtworkImgSrc = data?.sprites?.other?.["official-artwork"]?.front_default ?? "";
    const type = data?.types?.[0]?.type?.name ?? "";

    return (
        <Container>
            <Text style={tailwind('text-center capitalize text-4xl mt-2.5 font-bold')}>
                {data?.name}
            </Text>
            <Text style={tailwind('mt-2 text-base text-center')}>
                {`${data?.id}`.padStart(3, "0")}
            </Text>
            <View style={[styles.container, sharedStyles[type]]}>
                <Image source={{ uri: officialArtworkImgSrc }} style={styles.image} />
            </View>
            <Tabs tabs={POKEMON_DETAIL_TABS} data={data} />
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