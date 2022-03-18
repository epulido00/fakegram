import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import {useColorModeValue} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import UserScreen from '../screens/user/UserScreen';

const Tabs = createBottomTabNavigator();

const TabNavigation = () => {
  const color = useColorModeValue('Light', 'Dark');
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({ 
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let icon: string;

          switch(route.name) {
            case 'Home':
              icon = focused ? 'home-sharp' : 'home-outline';
            break;
            default:
              icon = focused ? 'person-sharp' : 'person-outline';
            break;
          }

          return (
            <Icon 
              name={ icon }
              size={ 30 }
              color={ useColorModeValue('#000', '#FFF') }
            />
          )
        },
        tabBarStyle: {
          backgroundColor: useColorModeValue('#FFF', '#000')
        },
        tabBarShowLabel: false,
      })}
    >
      <Tabs.Screen name='Home' component={ HomeNavigation }/>
      <Tabs.Screen name='User' component={ UserScreen }/>
    </Tabs.Navigator>
  );
};

export default TabNavigation;

