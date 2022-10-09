import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import PokemonList from '../components/PokemonList';
import HomeContainer from '../containers/Home';

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
                <TextInput value={form?.pokemonName ?? ""} onChangeText={onChangeText("pokemonName")} />
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