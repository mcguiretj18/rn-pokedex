import React, { useState } from "react";
import { Text } from "react-native";

import Container from "../containers";
import PokemonForm from "../components/PokemonForm";
import PokemonContent from "../components/PokemonContent";
import sharedStyles from "../shared/styles";

const Home = (props) => {
    const [ form, setForm ] = useState(null);
    const [ submitted, setSubmitted ] = useState(false);

    return (
        <Container>
            <Text style={[ sharedStyles.title, sharedStyles.fontBold ]}>
                Pokedex
            </Text>
            <Text style={sharedStyles.details}>
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