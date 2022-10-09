import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import PokemonList from '../components/PokemonList';
import HomeContainer from '../containers/Home';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = (props) => {
    const [form, setForm] = useState(null);

    const onChangeText = (name) => (value) => {
        setForm({ ...form, [name]: value });
    }

    return (
        <HomeContainer>
            <View style={styles.container}>
                <Text style={styles.title}>Pokedex</Text>
                <Text styles={styles.instructions}>Search for a pokemon by name</Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <FontistoIcon style={styles.searchIcon} name="search" size={16} />
                        <TextInput
                            style={styles.input}
                            value={form?.pokemonName ?? ""}
                            onChangeText={onChangeText("pokemonName")}
                            placeholder="Name or number"
                        />
                    </View>
                    <TouchableOpacity style={styles.filterButton}>
                        <MaterialCommunityIcon style={styles.filterIcon} name="tune-variant" size={16} color="#FFFEFE" />
                    </TouchableOpacity>
                </View>
                <PokemonList pokemonName={form?.pokemonName} {...props} />
            </View>
        </HomeContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#FFF"
    },
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
        height: 40,
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
    title: {
        fontWeight: "bold",
        marginTop: 10,
        fontSize: 36
    },
    instructions: {
        marginTop: 8,
        fontSize: 24
    }
});

export default Home;