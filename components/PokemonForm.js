import React, { useState } from "react";
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const PokemonForm = (props) => {
    const [ form, setForm ] = useState(null);

    const onChangeText = (name) => (value) => {
        props.setSubmitted(false);
        setForm({ ...form, [name]: value });
    }

    const onBlur = () => {
        if (form?.pokemonName) {
            /*
                Whenever you search by pokemon we clear
                out of the previous filter by type
            */
            props.setSubmitted(true);
            props.navigation.setParams({ typeUrl: "" });
            props.setForm({ ...props.form, ...form });
        }
    }

    return (
        <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
                <FontistoIcon style={styles.searchIcon} name="search" size={16} />
                <TextInput
                    style={styles.input}
                    value={form?.pokemonName ?? ""}
                    onChangeText={onChangeText("pokemonName")}
                    onBlur={onBlur}
                    placeholder="Name or number"
                />
            </View>
            <TouchableOpacity style={styles.filterButton} onPress={() => props.navigation.navigate("Filter")}>
                <MaterialCommunityIcon style={styles.filterIcon} name="tune-variant" size={16} color="#FFFEFE" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        height: 60,
        flexDirection: "row",
        alignItems: "center"
    },
    inputContainer: {
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: "#EAF2F4",
        borderRadius: 10,
        margin: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    searchIcon: {
        marginRight: 12
    },
    input: {
        height: 48,
    },
    filterButton: {
        marginLeft: 8,
        backgroundColor: "#5D5F7C",
        padding: 10,
        borderRadius: 10
    },
    filterIcon: {
        fontSize: 24,
    },
});

export default PokemonForm;