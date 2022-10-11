import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';

import Container from '../containers';
import PokemonForm from '../components/PokemonForm';
import PokemonContent from '../components/PokemonContent';

const Home = (props) => {
    const [form, setForm] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    return (
        <Container>
            <Text style={styles.title}>Pokedex</Text>
            <Text styles={styles.instructions}>Search for a pokemon by name or number</Text>
            <PokemonForm form={form} setForm={setForm} setSubmitted={setSubmitted} {...props} />
            <PokemonContent submitted={submitted} form={form} {...props} />
        </Container>
    )
}

const styles = StyleSheet.create({
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