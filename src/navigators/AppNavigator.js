import React from 'react';
import { createAppContainer, createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './../screens/HomeScreen';
import SearchScreen from './../screens/SearchScreen';
import LikesScreen from './../screens/LikesScreen';
import AccountScreen from './../screens/AccountScreen';
import GalleryScreen from './../screens/GalleryScreen';

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Search: SearchScreen,
    Likes: LikesScreen,
    Account: AccountScreen,
    Gallery: GalleryScreen
});

const appNavigator = createBottomTabNavigator({
    HomeTab: HomeScreen,
    SearchTab: SearchScreen,
    GalleryTab: GalleryScreen,
    LikesTab: LikesScreen,
    AccountTab: AccountScreen
});


export default createAppContainer(appNavigator);