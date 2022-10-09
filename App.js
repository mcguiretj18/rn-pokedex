/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PokemonList from './components/PokemonList';

/* TODOS:
    1. Add react navigation
    2. Add pokemon detail cards screens
    3. Add search functionality to search by pokemon
    4. Add filter options to configure how to search for pokemon
    5. Code cleanup
*/


const queryClient = new QueryClient();

const App  = () => {
  const [form, setForm] = useState(null);

  const onChangeText = (name) => (value) => {
    setForm({ ...form, [name]: value });
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.title}>Pokedex</Text>
        <Text styles={styles.instructions}>Search for a pokemon by name</Text>
        <TextInput value={form?.pokemonName ?? ""} onChangeText={onChangeText("pokemonName")} />
        <QueryClientProvider client={queryClient}>
          <PokemonList pokemonName={form?.pokemonName} />
        </QueryClientProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  title: {
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 28
  },
  instructions: {
    marginTop: 8,
    fontSize: 16
  }
});

export default App;
