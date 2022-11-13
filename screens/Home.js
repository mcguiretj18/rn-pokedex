import React, { useState } from "react";
import { Text } from "react-native";
import { useTailwind } from 'tailwind-rn';

import Container from "../containers";
import PokemonForm from "../components/PokemonForm";
import PokemonContent from "../components/PokemonContent";

const Home = (props) => {
    const [ form, setForm ] = useState(null);
    const [ submitted, setSubmitted ] = useState(false);
    const tailwind = useTailwind();
    return (
        <Container>
            <Text style={tailwind('text-4xl mt-2.5 font-bold')}>
                Pokedex
            </Text>
            <Text style={tailwind('mt-2 text-base')}>
                Search for a pokemon by name or number
            </Text>
            <PokemonForm
                form={form}
                setForm={setForm}
                submitted={submitted}
                setSubmitted={setSubmitted}
                {...props}
            />
            <PokemonContent form={form} submitted={submitted} {...props} />
        </Container>
    );
};

export default Home;