import React from "react";

import Pokemon from "../components/Pokemon";
import PokemonListByType from "../components/PokemonListByType";
import PokemonList from "../components/PokemonList";

const PokemonContent = ({form, route, ...props}) => {
    if (form?.pokemonName) {
        return <Pokemon searchTerm={form?.pokemonName} {...props} />
    }
    if (route?.params?.typeUrl) {
        return <PokemonListByType typeUrl={route.params.typeUrl} {...props} />
    }
    return <PokemonList {...props} />
}

export default PokemonContent;