/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import HomeScreen from "./screens/Home";
import DetailsScreen from "./screens/Details";
import FilterScreen from "./screens/Filter";

/* TODOS:
  1. Add info for pokemon details screen
  2. Add error handling
  3. Code cleanup
*/

const App = () => {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Filter" component={FilterScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </QueryClientProvider>
  );
};

export default App;
