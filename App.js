import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Ionicons} from '@expo/vector-icons';
import {Provider} from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

export default function App() {
  
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function DrawerNavigator() {
    return <Drawer.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#e4baa1'
    }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} options={{
        title: 'All Categories',
        drawerIcon: ({color, size}) => (
          <Ionicons name="list" color={color} size={size} />
        )
      }}/>
      <Drawer.Screen name="Favorites" 
      component={FavoritesScreen}
      options={{
        title: 'Favorites',
        drawerIcon: ({color, size}) => (
          <Ionicons name="star" color={color} size={size} />
        )
      }}/>
    </Drawer.Navigator>;
  }


  return (
   <>
    <StatusBar style='light'/>
    <Provider store={store}>
    {/* <FavoritesContextProvider> */}
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                  headerStyle: { backgroundColor: '#351401'},
                  headerTintColor: 'white',
                  contentStyle: {backgroundColor: '#3f2f25'}  
      }}>
        <Stack.Screen 
        name="MealsCategories"  
        component={DrawerNavigator}
        // component={CategoriesScreen}
        options={{
          // title: 'All Categories', 
          headerShown: false,    
        }}
        />
        <Stack.Screen 
        name="MealsOverview" 
        component={MealsOverviewScreen} 
        // options= {({route, navigation}) => {
        //   const catId = route.params.categoryId;
        //   return {
        //     title: catId,
        //   }
        // }}
        />
        <Stack.Screen 
        name="MealDetail" 
        component={MealDetailScreen}
        options= {{
          title: 'About the Meal',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    {/* </FavoritesContextProvider> */}
    </Provider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
