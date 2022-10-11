import { BASE_URL } from "./constants";


export function fetchSinglePokemon(searchTerm = "") {
    return fetch(`${BASE_URL}/${searchTerm.toLowerCase()}/`)
        .then(response => response.json());
}

export function fetchPokemon(url) {
    return fetch(url)
        .then(response => response.json())
}

export function fetchPokemonListByType(typeUrl) {
    return fetch(typeUrl)
        .then(response => response.json())
}

export function fetchPokemonDetails(id) {
    return fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
}

export function fetchTypes() {
    return fetch("https://pokeapi.co/api/v2/type?limit=18")
        .then(response => response.json())
}

export function fetchPokemonList({ pageParam = "limit=9&offset=0" }) {
    return fetch(`${BASE_URL}?${pageParam}`)
        .then(response => response.json())
}