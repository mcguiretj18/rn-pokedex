import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Pokemon from '../components/Pokemon';
import PokemonList from '../components/PokemonList';
import HomeContainer from '../containers/Home';
import PokemonListByType from '../components/PokemonListByType';
import PokemonForm from '../components/PokemonForm';

const PokemonContent = ({form, submitted, route, ...props}) => {
    if (form?.pokemonName && submitted) {
        return <Pokemon searchTerm={form?.pokemonName} {...props} />
    }
    if (route?.params?.type) {
        return <PokemonListByType type={route.params.type} {...props} />
    }
    return <PokemonList {...props} />
}

const Home = (props) => {
    const [form, setForm] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    return (
        <HomeContainer>
            <View style={styles.container}>
                <Text style={styles.title}>Pokedex</Text>
                <Text styles={styles.instructions}>Search for a pokemon by name or number</Text>
                <PokemonForm form={form} setForm={setForm} setSubmitted={setSubmitted} {...props} />
                <PokemonContent submitted={submitted} form={form} {...props} />
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