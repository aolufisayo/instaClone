import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styled from 'styled-components';
import GalleryIcon from '../navigators/components/GalleryIcon'
import Card from './components/Card';

class HomeScreen extends Component {
    render() {
        return (
            <Container>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Card />
                    <Card />
                </ScrollView>
            </Container>
        )
    }
}

const Container = styled.View`
flex: 1;
background-color: #F6F6F6;
`
export default HomeScreen;