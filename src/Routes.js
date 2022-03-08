import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/homeScreen";
import EventScreen from "./screens/EventsScreen";
import DetailsScreen from "./screens/DetailsSreen";
import CategoryScreen from "./screens/CategoryScreen";


const Stack = createNativeStackNavigator();

function Routes() {
    return (
            <NavigationContainer>
                <Stack.Navigator >
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="EventScreen" component={EventScreen} options={{headerShown: false}}/>
                    <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{headerShown: false}}/>
                </Stack.Navigator>
            </NavigationContainer>
  );
}

export default Routes;