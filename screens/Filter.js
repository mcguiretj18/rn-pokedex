import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";

import Container from "../containers";
import useQueryCustom from "../hooks/useQuery";
import sharedStyles from "../shared/styles";
import { fetchTypes } from "../api/fetchFns";
import { HOME_SCREEN, SEPARATOR_BORDER_COLOR } from "../shared/constants";
import { TYPES_KEY } from "../api/constants";
import icoMoonConfig from "../assets/selection.json";

const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf'
);

const Filter = (props) => {
    const { isLoading, error, data } = useQueryCustom({
        queryKey: TYPES_KEY,
        fetchFn: fetchTypes
    });

    if (isLoading || error) return null;

    const renderData = ({ item }) => {
        const { name, url } = item;
    
        return (
            <TouchableOpacity
                key={name}
                style={[styles.filter, sharedStyles.horizontal]}
                onPress={() =>
                    props.navigation.navigate(HOME_SCREEN, { typeUrl: url })
                }
            >
                <CustomIcon style={styles.customIcon} name={name} size={16} />
                <Text style={[sharedStyles.capitalize]}>{name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Container style={styles.container}>
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
    container: {
        marginBottom: 24
    },
    filter: {
        paddingVertical: 12,
        paddingHorizontal: 8
    },
    separator: {
        borderWidth: 1,
        borderColor: SEPARATOR_BORDER_COLOR
    },
    customIcon: {
        paddingRight: 12
    }
})

export default Filter;