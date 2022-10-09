import { Text, View } from "react-native";
import { useQuery } from '@tanstack/react-query';
import HomeContainer from "../containers/Home";

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

    console.log({ data });
    return (
        <HomeContainer>
            <View>
                <Text>Details</Text>
            </View>
        </HomeContainer>
    )
}

export default Details;