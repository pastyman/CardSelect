import * as React from 'react';

//nav
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//theme
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/theme';

//pages
import Home from './src/screens/Home';
import CreateCard from './src/screens/CreateCard';
import CreateCard2 from './src/screens/CreateCard/Step2';
import AddAnother from './src/screens/CreateCard/AddAnother';
import EditDeck from './src/screens/EditDeck';

const Stack = createStackNavigator();

export default App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CreateCard" component={CreateCard} />
          <Stack.Screen name="CreateCard2" component={CreateCard2} />
          <Stack.Screen name="AddAnother" component={AddAnother} />
          <Stack.Screen name="EditDeck" component={EditDeck} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
