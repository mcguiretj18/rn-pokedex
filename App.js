/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

/* TODOS:
    1. Add react navigation (check)
    2. Create Home Container that includes the status bar and query provider (check)
    3. Add react native vector icons
    4. Add pokemon detail screens - PDP
    5. Add search functionality to search by pokemon
    6. Add filter options to configure how to search for pokemon
    7. Code cleanup
*/

const App = () => {
  const Stack = createNativeStackNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
