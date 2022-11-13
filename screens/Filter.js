import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import { useTailwind } from 'tailwind-rn';

import Container from "../containers";
import useQueryCustom from "../hooks/useQuery";
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
    const tailwind = useTailwind();

    if (isLoading || error) return null;

    const renderData = ({ item }) => {
        const { name, url } = item;
    
        return (
            <TouchableOpacity
                key={name}
                style={tailwind('py-3 px-2 flex-row')}
                onPress={() =>
                    props.navigation.navigate(HOME_SCREEN, { typeUrl: url })
                }
            >
                <CustomIcon style={tailwind('pr-3')} name={name} size={16} />
                <Text style={tailwind('capitalize')}>{name}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <Container style={tailwind('mb-6')}>
            <Text style={tailwind('text-4xl mt-2.5 font-bold')}>
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
    separator: {
        borderWidth: 1,
        borderColor: SEPARATOR_BORDER_COLOR
    }
})

export default Filter;