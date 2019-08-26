import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Likes extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Likes component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    text: {
        color: 'red'
    }
})

export default Likes;