import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import MainDetailScreen from "../screens/mainScreen/MainDetailScreen";
import OrderDetailScreen from '../screens/OrderScreen/orderDetailScreen';
import Colors from "../constants/Colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTitleStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const MainStackNavigator = createStackNavigator();

export const MainDetailNavigator = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <MainStackNavigator.Screen
        name="MainScreen"
        component={MainDetailScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

const OrderStackNavigator = createStackNavigator();

export const OrderDetailNavigator = () => {
  return (
    <OrderStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <OrderStackNavigator.Screen
        name="OrderScreen"
        component={OrderDetailScreen}
      />
    </OrderStackNavigator.Navigator>
  );
};


const MainTabNavigator = createBottomTabNavigator();

export const MainNavigator = () => {
  return (
    <MainTabNavigator.Navigator>
      <MainTabNavigator.Screen
        name="main"
        component={MainDetailNavigator}
        options={{
          tabBarIcon: (props) => (
            <MaterialCommunityIcons
              name="shield-home-outline"
              size={24}
              color={props.color}
            />
          ),
        }}
      />
      <MainTabNavigator.Screen
        name="order"
        component={OrderDetailNavigator}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5 name="jedi-order" size={24} color={props.color} />
          ),
        }}
      />
    </MainTabNavigator.Navigator>
  );
};
