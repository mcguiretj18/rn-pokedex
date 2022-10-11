import { useQuery } from "@tanstack/react-query";
import { Text, TouchableOpacity, View } from "react-native";

function fetchTypes() {
    return fetch('https://pokeapi.co/api/v2/type?limit=19').then(res => res.json())
}

const Filter = (props) => {
    const { isLoading, error, data } = useQuery(["types"], fetchTypes);
    if (isLoading || error) return null;
    return (
        <View>
            <Text>Filter</Text>
            {data.results.map(({ name, url }) => (
                <TouchableOpacity key={name} onPress={() => props.navigation.navigate("Home", { typeUrl: url })}>
                    <Text style={{ textTransform: "capitalize" }}>{name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Filter;