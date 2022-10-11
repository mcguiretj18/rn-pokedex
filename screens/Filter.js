import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import Container from "../containers";
import useQueryCustom from "../hooks/useQuery";
import sharedStyles from "../shared/styles";
import { fetchTypes } from "../api/fetchFns";

const Filter = (props) => {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: "types",
        fetchFn: fetchTypes
    });

    if (isLoading || error) return null;

    const renderData = ({ item }) => {
        const { name, url } = item;
        return (
            <View style={styles.filter}>
                <TouchableOpacity
                    key={name}
                    onPress={() =>
                        props.navigation.navigate("Home", { typeUrl: url })
                    }
                >
                    <Text style={sharedStyles.capitalize}>{name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <Container>
            <Text style={[
                sharedStyles.title,
                sharedStyles.fontBold
            ]}>
                Filter
            </Text>
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