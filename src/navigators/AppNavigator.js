import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './../screens/HomeScreen';
import SearchScreen from './../screens/SearchScreen';
import LikesScreen from './../screens/LikesScreen';
import AccountScreen from './../screens/AccountScreen';
import GalleryScreen from './../screens/GalleryScreen';
import TabBarIcon from './components/TabBarIcon';


const HomeStack = createStackNavigator({
    Home: HomeScreen
});
HomeStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            name={Platform.OS === "android" ? "md-home" : "ios-home"}
            color="black"
        />
    )
}

const SearchStack = createStackNavigator({
    Search: SearchScreen
})
SearchStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            name={Platform.OS === "android" ? "md-search" : "ios-search"}
            color="black"
        />
    )
}

const LikesStack = createStackNavigator({
    Likes: LikesScreen
})
LikesStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            name={Platform.OS === "android" ? "md-heart" : "ios-heart"}
            color="black"
        />
    )
}

const GalleryStack = createStackNavigator({
    Gallery: GalleryScreen
})
GalleryStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            name={Platform.OS === "android" ? "md-instagram" : "ios-instagram"}
            color="black"
        />
    )
}

const AccountStack = createStackNavigator({
    Account: AccountScreen
})

AccountStack.navigationOptions = {
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            name={Platform.OS === "android" ? "md-person" : "ios-person"}
            color="black"
        />
    )
}

const appNavigator = createBottomTabNavigator({
    HomeStack,
    SearchStack,
    GalleryStack,
    LikesStack,
    AccountStack
}, {
        tabBarOptions: {
            showLabel: false
        }
    });


export default createAppContainer(appNavigator);