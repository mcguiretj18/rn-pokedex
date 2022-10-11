import { useQuery } from "@tanstack/react-query";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from '../containers';

function fetchTypes() {
    return fetch('https://pokeapi.co/api/v2/type?limit=18').then(res => res.json())
}

const Filter = (props) => {
    const { isLoading, error, data } = useQuery(["types"], fetchTypes);
    if (isLoading || error) return null;

    const renderData = ({ item }) => {
        const { name, url } = item;
        return (
            <View style={styles.filter}>
                <TouchableOpacity key={name} onPress={() => props.navigation.navigate("Home", { typeUrl: url })}>
                    <Text style={{ textTransform: "capitalize" }}>{name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Container>
            <Text>Filter</Text>
            <FlatList
                data={data.results}
                renderItem={renderData}
                ItemSeparatorComponent={<View style={styles.separator} />}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    filter: {
        paddingVertical: 12,
        paddingHorizontal: 8
    },
    separator: {
        borderWidth: 1,
        borderColor: "#DDD"
    }
})

export default Filter;