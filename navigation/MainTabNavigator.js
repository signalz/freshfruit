import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import Icon from "../components/Icon";
// import TabBarIcon from "../components/TabBarIcon";
import CartScreen from "../screens/CartScreen";
import ContactScreen from "../screens/ContactScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import i18n from "../translations";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: i18n.t("MainTabNavigator/Home"),
  tabBarIcon: ({ focused }) => (
    <Icon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
    />
  )
};

HomeStack.path = "";

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: i18n.t("MainTabNavigator/Profile"),
  tabBarIcon: ({ focused }) => (
    <Icon focused={focused} name="profile" type="AntDesign" />
  )
};

ProfileStack.path = "";

const CartStack = createStackNavigator(
  {
    Cart: CartScreen
  },
  config
);

CartStack.navigationOptions = {
  tabBarLabel: i18n.t("MainTabNavigator/ShoppingCart"),
  tabBarIcon: ({ focused }) => (
    <Icon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
    />
  )
};

CartStack.path = "";

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen
  },
  config
);

ContactStack.navigationOptions = {
  tabBarLabel: i18n.t("MainTabNavigator/Contact"),
  tabBarIcon: ({ focused }) => (
    <Icon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-call" : "md-call"}
    />
  )
};

ContactStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ProfileStack,
    CartStack,
    ContactStack
  },
  {
    tabBarOptions: {
      keyboardHidesTabBar: true
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
