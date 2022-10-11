import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
// import { createIconSetFromIcoMoon } from "react-native-vector-icons";

import Container from "../containers";
import useQueryCustom from "../hooks/useQuery";
import sharedStyles from "../shared/styles";
import { fetchTypes } from "../api/fetchFns";
import { HOME_SCREEN, SEPARATOR_BORDER_COLOR } from "../shared/constants";
import { TYPES_KEY } from "../api/constants";
// import icoMoonConfig from "../assets/selection.json";

// const CustomIcon = createIconSetFromIcoMoon(
//   icoMoonConfig,
//   'icomoon',
//   'icomoon.ttf'
// );

const Filter = (props) => {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: TYPES_KEY,
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
                        props.navigation.navigate(HOME_SCREEN, { typeUrl: url })
                    }
                >
                    {/* <CustomIcon name="bug" size={16} /> */}
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
                ItemSeparatorComponent={
                    <View style={styles.separator} />
                }
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
        borderColor: SEPARATOR_BORDER_COLOR
    }
})

export default Filter;